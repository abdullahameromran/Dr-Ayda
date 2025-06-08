import QuizClient from '@/components/quiz/QuizClient';
// import { questions as staticQuestions } from '@/data/questions'; // No longer using static data
import { getQuestions } from '@/app/admin/questions/actions'; // Fetch from Supabase via server action

export const dynamic = 'force-dynamic'; // Ensure fresh data

export default async function HomePage() {
  // Fetch questions from Supabase
  const questions = await getQuestions();

  if (!questions || questions.length === 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Professor: Aida Pregnancy Quiz</h1>
          <p className="text-lg text-muted-foreground">
            No questions are currently available. Please check back later or contact an administrator.
          </p>
           <p className="text-sm mt-4">Admin: <a href="/admin/questions" className="underline text-primary">Add Questions</a></p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-background">
      <QuizClient questions={questions} />
    </main>
  );
}
