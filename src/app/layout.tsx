
import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { BookOpenText, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Comprehensive Review in Maternal And Newborn Health Nursing',
  description: 'يهدف هذا التطبيق لتقديم معلومات ودعم في كل ما يخص صحة المرأة، بما في ذلك الحمل والولادة، العناية بعد الولادة، تنظيم الأسرة، وغيرها من المواضيع الهامة. صحتكِ هي أولويتنا.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col bg-background text-foreground" suppressHydrationWarning={true}>
        <header className="bg-card text-card-foreground shadow-md sticky top-0 z-50 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary hover:text-primary/90 transition-colors">
              <BookOpenText className="h-6 w-6" />
              <span>مراجعة تمريض الأمومة</span>
            </Link>
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
               <ShieldCheck className="h-4 w-4" />
              <span>سياسة الخصوصية</span>
            </Link>
          </div>
        </header>

        <main className="flex-grow w-full container mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          {children}
        </main>

        <footer className="bg-muted text-muted-foreground py-6 text-sm border-t mt-auto">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; {new Date().getFullYear()} مراجعة تمريض الأمومة والطفولة. جميع الحقوق محفوظة.</p>
            <p className="mt-1">
              تطبيق تعليمي مقدم من أ.د/ عايدة عبدالرازق
            </p>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
