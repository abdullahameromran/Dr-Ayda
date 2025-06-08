import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, ListChecks, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Admin Dashboard - Professor: Aida Quiz',
  description: 'Manage quiz questions and view submissions.',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <aside className="w-64 bg-card p-4 border-r">
        <h2 className="text-xl font-semibold mb-6 text-primary">Admin Menu</h2>
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/admin">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/admin/questions">
              <ListChecks className="mr-2 h-4 w-4" />
              Manage Questions
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/admin/submissions">
              <BarChart3 className="mr-2 h-4 w-4" />
              View Submissions
            </Link>
          </Button>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
