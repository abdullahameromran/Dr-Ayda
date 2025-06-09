
import QuizClient from '@/components/quiz/QuizClient';
import { questions as staticQuestions } from '@/data/questions';
import type { QuizQuestion } from '@/types';
import Image from 'next/image';

export default async function HomePage() {
  const questions: QuizQuestion[] = staticQuestions;

  const appTitle = "Comprehensive Review in Maternal And Newborn Health Nursing";
  const arabicIntro = "يهدف هذا التطبيق لتقديم معلومات ودعم في كل ما يخص صحة المرأة، بما في ذلك الحمل والولادة، العناية بعد الولادة، تنظيم الأسرة، وغيرها من المواضيع الهامة. صحتكِ هي أولويتنا.";
  const supervisorName = "أ.د/ عايدة عبدالرازق";
  const supervisorTitle = "أستاذ صحة المرأة - كلية التمريض، جامعة المنوفية";
  const contactNumber = "01205342194";
  const supervisorImage = "https://be13a6bfb72b1843b287a4c59c4f4174.cdn.bubble.io/f1749070664202x663207571008088400/8624f5b1-c5a3-438a-bbfa-4c1deda79052.jpg";


  if (!questions || questions.length === 0) {
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
    <main className="flex min-h-screen flex-col items-start p-4 sm:p-8 bg-background">
      <div className="w-full max-w-3xl text-center mb-8 rounded-lg bg-card p-6 shadow-md">
        <Image 
          src={supervisorImage} 
          alt="Portrait of Dr. Aida Abd El Razek" 
          width={120} 
          height={120} 
          className="rounded-full mx-auto mb-4 shadow-lg"
          data-ai-hint="portrait woman" 
          priority
        />
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-3 font-headline">{appTitle}</h1>
        <p className="text-md sm:text-lg text-foreground/90 leading-relaxed mb-6 px-2 font-body">
          {arabicIntro}
        </p>
        <div className="text-sm sm:text-md text-foreground space-y-1">
          <p className="font-semibold font-headline">
            تحت إشراف: {supervisorName}
          </p>
          <p className="font-semibold font-body">
            {supervisorTitle}
          </p>
          <p className="mt-1 font-semibold font-body">
            للتواصل: <a href={`tel:${contactNumber}`} className="text-primary hover:underline dir-ltr inline-block">{contactNumber}</a>
          </p>
        </div>
      </div>
      <QuizClient questions={questions} />
    </main>
  );
}
