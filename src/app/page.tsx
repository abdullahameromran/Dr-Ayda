
import QuizClient from '@/components/quiz/QuizClient';
import { questions as allQuestions } from '@/data/questions';
import type { QuizQuestion } from '@/types';
import Image from 'next/image';

// Fisher-Yates Shuffle function
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default async function HomePage() {
  const shuffledQuestions = shuffleArray(allQuestions);
  // Ensure we only take up to 20 questions, or fewer if the total is less than 20.
  const questionsForQuiz: QuizQuestion[] = shuffledQuestions.slice(0, Math.min(20, shuffledQuestions.length));

  const appTitle = "Comprehensive Review in Maternal And Newborn Health Nursing";
  const introText = "A comprehensive review in maternal and newborn nursing, covering key concepts and anticipated questions.\nAn ideal educational tool for students and practitioners to enhance understanding and prepare for exams.";
  const supervisorName = "Prof. Dr. Aida Abdelrazek";
  const supervisorTitle = "Professor of Maternal And Newborn Health Nursing - Faculty of Nursing, Menoufia University";
  const contactNumber = "01205342194";
  const supervisorImage = "https://be13a6bfb72b1843b287a4c59c4f4174.cdn.bubble.io/f1749070664202x663207571008088400/8624f5b1-c5a3-438a-bbfa-4c1deda79052.jpg";


  if (!questionsForQuiz || questionsForQuiz.length === 0) {
    return (
      <div className="flex flex-col items-center w-full space-y-8">
        <div className="text-center bg-card p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">{appTitle}</h1>
          <p className="text-lg text-muted-foreground">
            No questions are currently available. Please check back later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full gap-8">
      <div className="w-full max-w-3xl text-left rounded-lg bg-card p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col items-center mb-6">
          <Image
            src={supervisorImage}
            alt="Portrait of Dr. Aida Abd El Razek, supervisor of the Maternal and Newborn Health Nursing Review application"
            width={120}
            height={120}
            className="rounded-full shadow-lg animate-subtle-breathing"
            data-ai-hint="portrait woman"
            priority
          />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-3 font-headline text-center">{appTitle}</h1>
        <p className="text-md sm:text-lg text-foreground/90 leading-7 mb-6 px-2 font-body whitespace-pre-line font-semibold text-left">
          {introText}
        </p>
        <div className="text-sm sm:text-md text-foreground space-y-1 font-semibold text-left">
          <p className="font-headline font-semibold">
            Supervised by: {supervisorName}
          </p>
          <p className="font-body font-semibold">
            {supervisorTitle}
          </p>
          <p className="mt-1 font-body font-semibold">
            Contact: <a href={`tel:${contactNumber}`} className="text-primary hover:underline inline-block">{contactNumber}</a>
          </p>
        </div>
      </div>
      <QuizClient questions={questionsForQuiz} />
    </div>
  );
}

