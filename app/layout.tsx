import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import './globals.css';

import { ClerkProvider } from "@clerk/nextjs";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
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
  keywords: [
    "Mocker", 
    "Mocker Maulik", 
    "Mocker mock tests", 
    "CAT mock tests", 
    "GATE mock tests", 
    "Tech mock tests", 
    "free mock test platform", 
    "exam preparation",
    "Maulik Gaur",
    "Aaradhya Maharishi"
  ],
  authors: [{ name: "Maulik Gaur", url: "https://maulikgaur.me" }, { name: "Aaradhya Maharishi" }],
  creator: "Maulik Gaur",
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
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Mocker',
      url: siteUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteUrl}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'Mocker',
      url: siteUrl,
      logo: `${siteUrl}/logo-icon.svg`,
      description: 'The ultimate exam preparation platform for students. Practice CAT, GATE, and Tech mocks.',
      founder: [
        { '@type': 'Person', name: 'Maulik Gaur', url: 'https://maulikgaur.me' },
        { '@type': 'Person', name: 'Aaradhya Maharishi' }
      ],
      sameAs: [
        "https://github.com/Maulik-G/Mocker"
      ]
    }
  ];
  // --- END ADD ---
  
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${plusJakartaSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* --- ADD THIS SCRIPT TAG --- */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
          />
          {/* --- END ADD --- */}
          
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}