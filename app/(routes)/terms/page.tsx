import React from "react";
import Link from "next/link";
import Footer from "../_components/Footer";
import NavBar from "../_components/NavBar";

export default function TermsConditionsPage() {
  // --- Reusable Styles ---
  const sectionHeadingStyle =
    "text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100";
  const pStyle = "mb-4 leading-relaxed text-gray-700 dark:text-gray-300";
  const liStyle = "ml-6 list-disc text-gray-700 dark:text-gray-300";

  return (
      <>
      <NavBar />
      <div className="bg-white dark:bg-black flex items-center justify-center">
      <div className="max-w-3xl mx-auto py-20 px-4 sm:px-6 lg:px-8 ">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-gray-100">
          Terms and Conditions
        </h1>
        <p className="text-center mt-2 text-gray-500 dark:text-gray-400">
          Last updated: November 14, 2025
        </p>

        {/* --- IMPORTANT LEGAL DISCLAIMER --- */}
        

        <p className={pStyle + " mt-8"}>
         Welcome to Mocker (`we,` `us,` or `our`). These Terms and Conditions
          (`Terms`) govern your use of our website and services (collectively,
          the `Service`). By accessing or using our Service, you agree to be
          bound by these Terms.
        </p>

        {/* --- Section 1: User Accounts --- */}
        <h2 className={sectionHeadingStyle}>1. User Accounts</h2>
        <p className={pStyle}>
          To access most features of our Service, including your personal
          dashboard, you must register for an account. We use a third-party
          provider (Clerk) for authentication. You are responsible for all
          activities that occur under your account and for maintaining the
          confidentiality of your account credentials.
        </p>

        {/* --- Section 2: Use of Service --- */}
        <h2 className={sectionHeadingStyle}>2. Use of Service</h2>
        <p className={pStyle}>
          Mocker provides a platform for mock examinations (`Mocks`) and
          performance analytics. You agree to use the Service only for its
          intended purpose: personal, non-commercial exam preparation. You agree
          not to:
        </p>
        <ul className="mb-4">
          <li className={liStyle}>
            Use the Service for any illegal or unauthorized purpose.
          </li>
          <li className={liStyle}>
            Scrape, copy, or resell any of our mock questions or content.
          </li>
          <li className={liStyle}>
            Share your account with any other individuals.
          </li>
        </ul>

        {/* --- Section 3: User Data (Exam Results) --- */}
        <h2 className={sectionHeadingStyle}>3. Your Exam Results</h2>
        <p className={pStyle}>
          When you complete a Mock, you generate data, including your answers,
          scores, and performance analytics (`Results`). Your Results are stored
          in our database (Prisma on Vercel Postgres) and are linked to your user
          account.
        </p>
        <p className={pStyle}>
          By using the Service, you grant Mocker a non-exclusive, worldwide,
          royalty-free license to store, process, and display your Results for
          the sole purpose of providing the Service to you (e.g., showing them on
          your personal dashboard). We will not share your individual results
          with third parties without your consent.
        </p>

        {/* --- Section 4: Disclaimers --- */}
        <h2 className={sectionHeadingStyle}>4. Disclaimers</h2>
        <p className={pStyle}>
          The Service is provided on an `as-is` and `as-available` basis. While
          we strive for accuracy, we make no warranties regarding the
          correctness, completeness, or reliability of the exam questions or
          analytics.
        </p>
        <p className={pStyle}>
          Mocker is an independent platform. We are not affiliated with, endorsed
          by, or connected to the official administrators of the CAT, GATE, or
          any other official examination body.
        </p>
        <p className={pStyle}>
          Your performance on our Mocks does not guarantee a similar performance
          on any real examination.
        </p>

        {/* --- Section 5: Limitation of Liability --- */}
        <h2 className={sectionHeadingStyle}>5. Limitation of Liability</h2>
        <p className={pStyle}>
          To the fullest extent permitted by law, Mocker and its team (Maulik
          Gaur, Aaradhya Maharishi) shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages, or any loss
          of profits or revenues, whether incurred directly or indirectly.
        </p>

        {/* --- Section 6: Changes to Terms --- */}
        <h2 className={sectionHeadingStyle}>6. Changes to Terms</h2>
        <p className={pStyle}>
          We reserve the right to modify these Terms at any time. We will notify
          you of any changes by posting the new Terms on this page. Your
          continued use of the Service after any such changes constitutes your
          acceptance of the new Terms.
        </p>

        {/* --- Section 7: Contact Us --- */}
        <h2 className={sectionHeadingStyle}>7. Contact Us</h2>
        <p className={pStyle}>
          If you have any questions about these Terms, please contact us by
          visiting the <Link href="/meet-the-team">Meet the Team</Link> page or by emailing{" "}
          <Link
            href="mailto:maulikgaur12345@gmail.com"
            className="text-blue-500 hover:underline"
          >
            support.mocker@gmail.com
          </Link>{" "}.
        </p>
      </div>
      </div>
      <Footer />
      </>
  );
}