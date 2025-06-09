
import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { BookOpenText, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Comprehensive Review in Maternal And Newborn Health Nursing',
  description: 'An essential learning and review tool for maternal and newborn health nursing. Master key concepts and prepare effectively with comprehensive questions and explanations.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning={true}>
        <video autoPlay muted loop playsInline className="fixed inset-0 w-full h-full object-cover -z-10">
          {/* 
            Consider using a more relevant and optimized video.
            This is a placeholder:
          */}
          <source src="https://videos.pexels.com/video-files/4782079/4782079-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="relative z-0 min-h-screen flex flex-col bg-background/80 text-foreground">
          <header className="bg-card text-card-foreground shadow-md sticky top-0 z-50 border-b">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary hover:text-primary/90 transition-colors">
                <BookOpenText className="h-6 w-6" />
                <span>Maternal Nursing Review</span>
              </Link>
              <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                 <ShieldCheck className="h-4 w-4" />
                <span>Privacy Policy</span>
              </Link>
            </div>
          </header>

          <main className="flex-grow w-full container mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
            {children}
          </main>

          <footer className="bg-muted text-muted-foreground py-6 text-sm border-t mt-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p>&copy; {new Date().getFullYear()} Maternal and Newborn Health Nursing Review. All rights reserved.</p>
              <p className="mt-1">
                An educational application by Prof. Dr. Aida Abdelrazek
              </p>
            </div>
          </footer>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
