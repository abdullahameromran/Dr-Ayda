import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Placeholder for fetching submissions - implement this when ready
async function getSubmissions() {
  // const supabase = createSupabaseAdminClient();
  // const { data, error } = await supabase.from('quiz_submissions').select('*').order('submitted_at', { ascending: false });
  // if (error) {
  //   console.error("Error fetching submissions:", error);
  //   return [];
  // }
  // return data;
  return []; // Placeholder
}

export default async function ViewSubmissionsPage() {
  const submissions = await getSubmissions();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-foreground">Quiz Submissions</h1>
      <Card>
        <CardHeader>
          <CardTitle>Recent Submissions</CardTitle>
          <CardDescription>Details of quiz submissions from users.</CardDescription>
        </CardHeader>
        <CardContent>
          {submissions.length === 0 ? (
            <p>No submissions yet.</p>
          ) : (
            <p>{/* TODO: Render submissions in a table */}</p>
          )}
           <p className="mt-4 text-sm text-muted-foreground">
            Submission recording and display is not yet fully implemented.
            The 'quiz_submissions' table structure is available in Supabase.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
