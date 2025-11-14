import React from "react";
import Link from "next/link";
import Footer from "../_components/Footer";
import NavBar from "../_components/NavBar";

export default function PrivacyPolicyPage() {
  // --- Reusable Styles (same as Terms page for consistency) ---
  const sectionHeadingStyle =
    "text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100";
  const pStyle = "mb-4 leading-relaxed text-gray-700 dark:text-gray-300";
  const liStyle = "ml-6 list-disc text-gray-700 dark:text-gray-300";

  return (
    <>
    <NavBar />
    <div className="bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-gray-100">
          Privacy Policy
        </h1>
        <p className="text-center mt-2 text-gray-500 dark:text-gray-400">
          Last updated: November 14, 2025
        </p>

        

        <p className={pStyle + " mt-8"}>
          Mocker (`we,` `us,` or `our`) is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you use our Service. By using our
          Service, you agree to the collection and use of information in
          accordance with this policy.
        </p>

        {/* --- Section 1: Information We Collect --- */}
        <h2 className={sectionHeadingStyle}>1. Information We Collect</h2>
        <p className={pStyle}>
          We collect information that you provide to us and information that is
          automatically collected when you use our Service.
        </p>
        <ul className="mb-4 space-y-2">
          <li>
            <strong className="dark:text-gray-200">
              Personal Information (via Clerk)
            </strong>
            <p className={pStyle}>
              When you register for an account, we use a third-party service,{" "}
              <strong>Clerk</strong>, to manage authentication. We may obtain
              access to your user ID (`userId`), email address, and name from
              Clerk to create and maintain your account. We do not store or have
              access to your password.
            </p>
          </li>
          <li>
            <strong className="dark:text-gray-200">
              User-Generated Data (Exam Results)
            </strong>
            <p className={pStyle}>
              When you complete a Mock, we collect and store the results. This
              data is stored in our secure **Vercel Postgres** database (managed
              via **Prisma**) and includes:
            </p>
            <ul className="mb-4">
              <li className={liStyle}>Your scores, percentage, and accuracy.</li>
              <li className={liStyle}>
                Your specific answers for each question (`questionResults`).
              </li>
              <li className={liStyle}>The time taken to complete the exam.</li>
              <li className={liStyle}>
                This data is directly linked to your `userId` to power your
                personal dashboard.
              </li>
            </ul>
          </li>
          <li>
            <strong className="dark:text-gray-200">
              Usage Data
            </strong>
            <p className={pStyle}>
              We may automatically collect information about how you access and
              use the Service, such as your IP address, browser type, and pages
              visited, to help us improve our platform.
            </p>
          </li>
        </ul>

        {/* --- Section 2: How We Use Your Information --- */}
        <h2 className={sectionHeadingStyle}>2. How We Use Your Information</h2>
        <p className={pStyle}>
          We use the information we collect to:
        </p>
        <ul className="mb-4">
          <li className={liStyle}>
            Provide, operate, and maintain the Service.
          </li>
          <li className={liStyle}>
            Authenticate your account and securely log you in.
          </li>
          <li className={liStyle}>
            Display your personal exam results and analytics on your dashboard.
          </li>
          <li className={liStyle}>
            Analyze usage to understand trends and improve our Service.
          </li>
        </ul>

        {/* --- Section 3: How We Share Your Information --- */}
        <h2 className={sectionHeadingStyle}>3. How We Share Your Information</h2>
        <p className={pStyle}>
          We do not sell your personal information. We only share your
          information with the following third parties to the extent necessary
          to provide our Service:
        </p>
        <ul className="mb-4">
          <li className={liStyle}>
            <strong>Service Providers:</strong> We share data with services that
            help us run Mocker. This includes **Clerk** (for authentication) and{" "}
            <strong>Vercel</strong> (for hosting and our Postgres database).
          </li>
          <li className={liStyle}>
            <strong>Legal Compliance:</strong> We may disclose your information
            if required to do so by law or in response to valid requests by
            public authorities.
          </li>
        </ul>

        {/* --- Section 4: Data Security --- */}
        <h2 className={sectionHeadingStyle}>4. Data Security</h2>
        <p className={pStyle}>
          The security of your data is important to us. We use industry-standard
          measures (such as those provided by Vercel and Clerk) to protect your
          information. Your personal exam results are linked only by your
          anonymized `userId` in our database. However, no method of
          transmission over the Internet or method of electronic storage is 100%
          secure.
        </p>

        {/* --- Section 5: Your Data Rights --- */}
        <h2 className={sectionHeadingStyle}>5. Your Data Rights</h2>
        <p className={pStyle}>
          You have the right to access and delete your information.
        </p>
        <ul className="mb-4">
          <li className={liStyle}>
            <strong>Access:</strong> You can access all your saved exam results
            at any time via your personal dashboard.
          </li>
          <li className={liStyle}>
            <strong>Deletion:</strong> You can delete your account by managing
            your profile through the Clerk user button. Deleting your account
            will initiate a process to remove your personal information and
            associated exam results from our database.
          </li>
        </ul>

        {/* --- Section 6: Children's Privacy --- */}
        <h2 className={sectionHeadingStyle}>6. Children`s Privacy</h2>
        <p className={pStyle}>
          Our Service is not intended for use by children under the age of 13. We
          do not knowingly collect personal information from children under 13.
        </p>

        {/* --- Section 7: Changes to This Policy --- */}
        <h2 className={sectionHeadingStyle}>7. Changes to This Privacy Policy</h2>
        <p className={pStyle}>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>

        {/* --- Section 8: Contact Us --- */}
        <h2 className={sectionHeadingStyle}>8. Contact Us</h2>
        <p className={pStyle}>
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <ul className="mb-4">
          <li className={liStyle}>
            By visiting our{" "}
            <Link
              href="/meet-the-team"
              className="text-blue-500 hover:underline"
              >
              Meet the Team
            </Link>{" "}
            page.
          </li>
          <li className={liStyle}>
            By emailing:{" "}
            <a
              href="mailto:maulikgaur12345@gmail.com"
              className="text-blue-500 hover:underline"
              >
              support.mocker@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
    <Footer/>
    </>
  );
}