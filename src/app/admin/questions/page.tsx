import QuestionForm from './QuestionForm';
import QuestionsList from './QuestionsList';
import { getQuestions } from './actions';

// Make this page dynamic so it re-fetches data on each request during development
// or after revalidation. For production, consider caching strategies if needed.
export const dynamic = 'force-dynamic';


export default async function ManageQuestionsPage() {
  const questions = await getQuestions();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-foreground">Manage Questions</h1>
      <QuestionForm />
      <QuestionsList questions={questions} />
    </div>
  );
}
