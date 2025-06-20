
"use client";

import type { QuizQuestion } from '@/types';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, XCircle, RotateCcw, HeartPulse } from 'lucide-react';

interface QuizClientProps {
  questions: QuizQuestion[];
}

export default function QuizClient({ questions }: QuizClientProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [progressValue, setProgressValue] = useState(0);

  const quizTitle = "Comprehensive Review in Maternal And Newborn Health Nursing";

  useEffect(() => {
    setProgressValue(((currentQuestionIndex + 1) / questions.length) * 100);
  }, [currentQuestionIndex, questions.length]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return; 

    setSelectedAnswer(answerIndex);
    setShowFeedback(true);
    if (answerIndex === currentQuestion.correct) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setQuizCompleted(true);
      setProgressValue(100);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowFeedback(false);
    setQuizCompleted(false);
    setProgressValue(0);
  };

  const getButtonClass = (index: number) => {
    if (!showFeedback) {
      return selectedAnswer === index ? '' : 'outline';
    }
    
    if (index === currentQuestion.correct) {
      return 'bg-accent hover:bg-accent/90';
    }
    if (index === selectedAnswer && index !== currentQuestion.correct) {
      return 'bg-destructive hover:bg-destructive/90';
    }
    return 'outline';
  };
  
  const getButtonVariant = (index: number) : "default" | "outline" | "secondary" | "ghost" | "link" | "destructive" | null | undefined => {
    if (!showFeedback) {
      return selectedAnswer === index ? 'default' : 'outline';
    }
    if (index === currentQuestion.correct) {
      return undefined; 
    }
    if (index === selectedAnswer && index !== currentQuestion.correct) {
      return undefined; 
    }
    return 'outline';
  };


  if (quizCompleted) {
    return (
      <Card className="w-full max-w-lg shadow-xl rounded-lg">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-xl sm:text-2xl mb-2 text-center">{quizTitle}</CardTitle>
          <CardDescription className="font-body text-lg text-left">Quiz Completed!</CardDescription>
          <HeartPulse className="mx-auto h-12 w-12 text-primary mt-2" />
        </CardHeader>
        <CardContent className="text-left">
          <p className="text-xl font-body mb-4">
            Your final score is: <span className="font-bold text-primary">{score}</span> out of {questions.length}
          </p>
          <p className="text-lg font-body">
            {score > questions.length / 2 ? "Great job!" : "Keep learning and try again!"}
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleRestartQuiz} className="font-body">
            <RotateCcw className="mr-2 h-4 w-4" /> Restart Quiz
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-lg shadow-xl rounded-lg">
      <CardHeader>
        <div className="flex items-center justify-center mb-2">
          <HeartPulse className="h-8 w-8 text-primary mr-2 hidden sm:block" />
          <CardTitle className="font-headline text-xl sm:text-2xl text-center">{quizTitle}</CardTitle>
        </div>
        <Progress value={progressValue} className="w-full my-2 h-2" />
        <CardDescription className="font-body text-left">
          Question {currentQuestionIndex + 1} of {questions.length}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-semibold mb-6 font-body text-left text-black dark:text-neutral-50">{currentQuestion.question}</h2>
        <div className="space-y-3">
          {currentQuestion.answers.map((answer, index) => (
            <Button
              key={index}
              variant={getButtonVariant(index)}
              className={`w-full h-auto py-3 px-4 text-base font-body transition-all duration-200 ease-in-out transform hover:scale-[1.02] text-left ${getButtonClass(index)}`}
              onClick={() => handleAnswerSelect(index)}
              disabled={showFeedback}
            >
              <span className="w-full text-left text-black dark:text-neutral-50 whitespace-normal">{String.fromCharCode(65 + index)}. {answer}</span>
            </Button>
          ))}
        </div>
        {showFeedback && (
          <div className={`mt-6 p-4 rounded-md text-sm ${selectedAnswer === currentQuestion.correct ? 'bg-accent/20 border border-accent' : 'bg-destructive/20 border border-destructive'}`}>
            <div className="flex items-center mb-2">
              {selectedAnswer === currentQuestion.correct ? (
                <CheckCircle2 className="h-5 w-5 mr-2 text-accent" />
              ) : (
                <XCircle className="h-5 w-5 mr-2 text-destructive" />
              )}
              <p className="font-semibold font-body text-black dark:text-neutral-50">
                {selectedAnswer === currentQuestion.correct ? 'Correct!' : 'Incorrect!'}
              </p>
            </div>
            <p className="font-body text-left font-semibold text-black dark:text-neutral-50">{currentQuestion.explanation}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end mt-4">
        <Button onClick={handleNextQuestion} disabled={!showFeedback} className="font-body">
          {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Show Results'}
        </Button>
      </CardFooter>
    </Card>
  );
}
