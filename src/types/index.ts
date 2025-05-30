export interface QuizQuestion {
  id: number;
  question: string;
  answers: string[];
  correct: number; // Index of the correct answer
  explanation: string;
}
