import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-foreground">Admin Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Welcome, Admin!</CardTitle>
          <CardDescription>Manage your Professor: Aida Quiz application from here.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Select an option from the sidebar to manage questions or view submissions.</p>
          <p className="mt-4 text-sm text-destructive-foreground bg-destructive p-3 rounded-md">
            <strong>Security Warning:</strong> This admin dashboard currently has no authentication.
            Please implement authentication to protect these routes in a production environment.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
