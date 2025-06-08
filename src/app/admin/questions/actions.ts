'use server';
import { revalidatePath } from 'next/cache';
import { createSupabaseAdminClient } from '@/lib/supabaseClient';
import type { QuizQuestion } from '@/types';
import type { TablesInsert } from '@/types/supabase';

export async function getQuestions(): Promise<QuizQuestion[]> {
  const supabase = createSupabaseAdminClient(); // Use admin for consistent view or set up RLS for anon
  const { data, error } = await supabase
    .from('questions')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
  // Map Supabase row to QuizQuestion type
  return data.map(q => ({
    id: q.id,
    question: q.question,
    answers: q.answers as string[], // Assuming answers is stored as JSON array of strings
    correct: q.correct_answer_index,
    explanation: q.explanation,
    created_at: q.created_at,
  })) || [];
}

export async function addQuestion(formData: FormData): Promise<{ success: boolean; error?: string }> {
  const supabase = createSupabaseAdminClient();
  
  const question = formData.get('question') as string;
  const answersRaw = formData.getAll('answers[]') as string[]; // Expecting multiple 'answers[]' fields
  const correctAnswerIndex = parseInt(formData.get('correctAnswerIndex') as string, 10);
  const explanation = formData.get('explanation') as string;

  if (!question || answersRaw.length < 2 || isNaN(correctAnswerIndex) || !explanation) {
    return { success: false, error: 'Missing required fields or not enough answers.' };
  }
  
  const answers = answersRaw.filter(ans => ans.trim() !== '');
  if (answers.length < 2) {
    return { success: false, error: 'At least two non-empty answers are required.' };
  }
  if (correctAnswerIndex < 0 || correctAnswerIndex >= answers.length) {
     return { success: false, error: 'Correct answer index is out of bounds.' };
  }

  const newQuestion: TablesInsert<'questions'> = {
    question,
    answers: answers, // Supabase client stringifies arrays to JSONB automatically
    correct_answer_index: correctAnswerIndex,
    explanation,
  };

  const { error } = await supabase.from('questions').insert(newQuestion);

  if (error) {
    console.error('Error adding question:', error);
    return { success: false, error: error.message };
  }

  revalidatePath('/admin/questions');
  revalidatePath('/'); // Also revalidate home page if it fetches questions
  return { success: true };
}

export async function deleteQuestion(id: number): Promise<{ success: boolean; error?: string }> {
  const supabase = createSupabaseAdminClient();
  const { error } = await supabase.from('questions').delete().match({ id });

  if (error) {
    console.error('Error deleting question:', error);
    return { success: false, error: error.message };
  }

  revalidatePath('/admin/questions');
  revalidatePath('/');
  return { success: true };
}
