
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
  const arabicIntro = "يهدف هذا التطبيق لتقديم معلومات ودعم في كل ما يخص صحة المرأة، بما في ذلك الحمل والولادة، العناية بعد الولادة، تنظيم الأسرة، وغيرها من المواضيع الهامة. صحتكِ هي أولويتنا.";
  const supervisorName = "أ.د/ عايدة عبدالرازق";
  const supervisorTitle = "أستاذ صحة المرأة - كلية التمريض، جامعة المنوفية";
  const contactNumber = "01205342194";
  const supervisorImage = "https://be13a6bfb72b1843b287a4c59c4f4174.cdn.bubble.io/f1749070664202x663207571008088400/8624f5b1-c5a3-438a-bbfa-4c1deda79052.jpg";


  if (!questionsForQuiz || questionsForQuiz.length === 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{appTitle}</h1>
          <p className="text-lg text-muted-foreground">
            No questions are currently available. Please check back later.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 bg-background">
      <div className="w-full max-w-3xl text-start mb-8 rounded-lg bg-card p-6 shadow-md">
        <div className="flex flex-col items-center mb-4"> {/* Centering container for image */}
          <Image
            src={supervisorImage}
            alt="Portrait of Dr. Aida Abd El Razek"
            width={120}
            height={120}
            className="rounded-full shadow-lg"
            data-ai-hint="portrait woman"
            priority
          />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-3 font-headline text-center">{appTitle}</h1>
        <p className="text-md sm:text-lg text-foreground/90 leading-relaxed mb-6 px-2 font-body">
          {arabicIntro}
        </p>
        <div className="text-sm sm:text-md text-foreground space-y-1 font-semibold">
          <p className="font-headline">
            تحت إشراف: {supervisorName}
          </p>
          <p className="font-body">
            {supervisorTitle}
          </p>
          <p className="mt-1 font-body">
            للتواصل: <a href={`tel:${contactNumber}`} className="text-primary hover:underline dir-ltr inline-block">{contactNumber}</a>
          </p>
        </div>
      </div>
      <QuizClient questions={questionsForQuiz} />
    </main>
  );
}
