export interface QuizQuestion {
  id?: number;
  question: string;
  answers: string[];
  correct: number;
  explanation: string;
  created_at?: string;
}

// Simplified QuizSubmission, can be expanded later if needed
export interface QuizSubmission {
  id?: number;
  user_identifier?: string; // Could be a user ID if you add authentication
  score: number;
  total_questions: number;
  submitted_at?: string;
}
