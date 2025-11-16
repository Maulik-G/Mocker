import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import { ExamProvider } from "@/context/ExamContext";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://mocker-mg.vercel.app"; // <-- Use a variable for consistency

export const metadata: Metadata = {
  title: {
    default: "Mocker - Master Your Exams",
    template: "%s | Mocker",
  },
  description: "Practice for CAT, GATE, and other competitive exams with free mocks and previous year papers, test series on Mocker.",
  icons: {
    icon: "/logo-icon.svg",
  },
  
  // --- SEO ---
  metadataBase: new URL(siteUrl),

  openGraph: {
    title: 'Mocker - Master Your Exams',
    description: 'Practice for CAT, GATE, Technical and other competitive exams with free mocks and previous year papers, test series on Mocker.', // <-- FIX: Made description consistent
    url: siteUrl, // <-- FIX: Use your actual site URL
    siteName: 'Mocker',
    images: [
      {
        url: '/og-image.png', // <-- IMPORTANT: Use a .png (1200x630px), not .svg
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  // --- ADD THIS ---
  twitter: {
    card: 'summary_large_image',
    title: 'Mocker - Master Your Exams',
    description: 'Practice for CAT, GATE, Technical and other competitive exams with free mocks, previous year papers and test series on Mocker.',
    images: ['/og-image.png'], // <-- Use the same .png image
  },
  // --- END ADD ---

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true, 
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode;}>) {
  
  // --- ADD THIS JSON-LD SCRIPT ---
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Mocker',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`, // Example search URL
      },
      'query-input': 'required name=search_term_string',
    },
  };
  // --- END ADD ---
  
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* --- ADD THIS SCRIPT TAG --- */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          />
          {/* --- END ADD --- */}
          
          <ExamProvider>
            {/* Using <main> is better for accessibility and SEO */}
            <main>{children}</main> 
          </ExamProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}