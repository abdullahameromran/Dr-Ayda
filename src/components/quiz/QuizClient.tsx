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

  useEffect(() => {
    setProgressValue(((currentQuestionIndex + 1) / questions.length) * 100);
  }, [currentQuestionIndex, questions.length]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return; // Prevent changing answer after feedback is shown

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
    // Feedback is shown
    if (index === currentQuestion.correct) {
      return 'bg-accent text-accent-foreground hover:bg-accent/90';
    }
    if (index === selectedAnswer && index !== currentQuestion.correct) {
      return 'bg-destructive text-destructive-foreground hover:bg-destructive/90';
    }
    return 'outline';
  };
  
  const getButtonVariant = (index: number) : "default" | "outline" | "secondary" | "ghost" | "link" | "destructive" | null | undefined => {
    if (!showFeedback) {
      return selectedAnswer === index ? 'default' : 'outline';
    }
    if (index === currentQuestion.correct) {
      return undefined; // Using className for accent
    }
    if (index === selectedAnswer && index !== currentQuestion.correct) {
      return undefined; // Using className for destructive
    }
    return 'outline';
  };


  if (quizCompleted) {
    return (
      <Card className="w-full max-w-lg shadow-xl rounded-lg">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-2xl mb-2">Quiz Completed!</CardTitle>
          <HeartPulse className="mx-auto h-12 w-12 text-primary" />
        </CardHeader>
        <CardContent className="text-center">
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
          <HeartPulse className="h-8 w-8 text-primary mr-2" />
          <CardTitle className="font-headline text-2xl text-center">AMKE Pregnancy Quiz</CardTitle>
        </div>
        <Progress value={progressValue} className="w-full my-2 h-2" />
        <CardDescription className="text-center font-body">
          Question {currentQuestionIndex + 1} of {questions.length}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h2 className="text-lg font-semibold mb-6 text-center font-body">{currentQuestion.question}</h2>
        <div className="space-y-3">
          {currentQuestion.answers.map((answer, index) => (
            <Button
              key={index}
              variant={getButtonVariant(index)}
              className={`w-full justify-start text-left h-auto py-3 px-4 text-base font-body transition-all duration-200 ease-in-out transform hover:scale-[1.02] ${getButtonClass(index)}`}
              onClick={() => handleAnswerSelect(index)}
              disabled={showFeedback}
            >
              {answer}
            </Button>
          ))}
        </div>
        {showFeedback && (
          <div className={`mt-6 p-4 rounded-md text-sm ${selectedAnswer === currentQuestion.correct ? 'bg-accent/20 border border-accent text-accent-foreground' : 'bg-destructive/20 border border-destructive text-destructive-foreground'}`}>
            <div className="flex items-center mb-2">
              {selectedAnswer === currentQuestion.correct ? (
                <CheckCircle2 className="h-5 w-5 mr-2 text-accent" />
              ) : (
                <XCircle className="h-5 w-5 mr-2 text-destructive" />
              )}
              <p className="font-semibold font-body">
                {selectedAnswer === currentQuestion.correct ? 'Correct!' : 'Incorrect!'}
              </p>
            </div>
            <p className="font-body">{currentQuestion.explanation}</p>
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
