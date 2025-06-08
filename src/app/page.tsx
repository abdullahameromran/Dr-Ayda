import QuizClient from '@/components/quiz/QuizClient';
import { questions as staticQuestions } from '@/data/questions';
import type { QuizQuestion } from '@/types';

export default async function HomePage() {
  const questions: QuizQuestion[] = staticQuestions;

  if (!questions || questions.length === 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Professor: Aida Pregnancy Quiz</h1>
          <p className="text-lg text-muted-foreground">
            No questions are currently available. Please check back later.
          </p>
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
