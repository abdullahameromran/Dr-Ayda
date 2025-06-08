export interface QuizQuestion {
  id?: number; // Optional for new questions before they are saved
  question: string;
  answers: string[]; // Stored as JSONB in Supabase, parsed to string[] in app
  correct: number; // Index of the correct answer (correct_answer_index in Supabase)
  explanation: string;
  created_at?: string; // Handled by Supabase
}

export interface QuizSubmission {
  id?: number;
  user_identifier?: string;
  score: number;
  total_questions: number;
  submitted_at?: string;
  // answered_questions?: any; // Consider a more specific type if used
}
