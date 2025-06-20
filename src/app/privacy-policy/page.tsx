
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Comprehensive Review in Maternal And Newborn Health Nursing',
  description: 'Privacy Policy for Comprehensive Review in Maternal And Newborn Health Nursing.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-3xl space-y-8 rounded-lg bg-card p-6 shadow-lg md:p-10 text-left">
        <header className="text-center">
          <h1 className="font-headline text-3xl font-bold text-primary">Privacy Policy</h1>
          <p className="font-body mt-1">For: Comprehensive Review in Maternal And Newborn Health Nursing</p>
          <p className="mt-2 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <section className="space-y-4">
          <h2 className="font-headline text-2xl font-semibold">1. Introduction</h2>
          <p className="font-body leading-relaxed text-foreground/90">
            Welcome to "Comprehensive Review in Maternal And Newborn Health Nursing" ("us", "we", or "our"). We are committed to protecting your
            personal information and your right to privacy. If you have any questions or concerns about this
            privacy notice, or our practices with regards to your personal information, please contact us.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-headline text-2xl font-semibold">2. Information We Collect</h2>
          <p className="font-body leading-relaxed text-foreground/90">
            As of the last updated date, "Comprehensive Review in Maternal And Newborn Health Nursing" does not collect any personally identifiable information
            from its users. The quiz is designed to be an educational tool, and your scores or answers are not
            stored or tracked by us.
          </p>
          <p className="font-body leading-relaxed text-foreground/90">
            We do not use cookies for tracking purposes, and we do not require user registration.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-headline text-2xl font-semibold">3. How We Use Your Information</h2>
          <p className="font-body leading-relaxed text-foreground/90">
            Since we do not collect any personal information, we do not use your information in any way.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-headline text-2xl font-semibold">4. Will Your Information Be Shared With Anyone?</h2>
          <p className="font-body leading-relaxed text-foreground/90">
            We do not collect personal information, so there is no information to share.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-headline text-2xl font-semibold">5. Third-Party Websites</h2>
          <p className="font-body leading-relaxed text-foreground/90">
            The Application may contain links to third-party websites or services that are not owned or controlled by us.
            We are not responsible for the privacy practices of these third-party websites or services. We encourage you
            to be aware when you leave our Application and to read the privacy statements of each and every website
            and service that collects personal information.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-headline text-2xl font-semibold">6. Changes to This Privacy Policy</h2>
          <p className="font-body leading-relaxed text-foreground/90">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-headline text-2xl font-semibold">7. Contact Us</h2>
          <p className="font-body leading-relaxed text-foreground/90">
            If you have any questions about this Privacy Policy, you can contact us:
          </p>
          <ul className="list-inside list-disc font-body leading-relaxed text-foreground/90">
            <li>By email: [Your Contact Email Address - Please provide if available]</li>
            <li>By phone: <a href="tel:01205342194" className="text-primary hover:underline inline-block">01205342194</a> (Prof. Dr. Aida Abdelrazek)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
