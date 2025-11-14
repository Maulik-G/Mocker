"use client";

import React from "react";
// 1. Import social icons
import { BriefcaseBusiness, Github, Linkedin, Twitter, Lock } from "lucide-react";
// 2. FIX: Use correct relative paths for all imports
import { GlowingEffect } from "../../../components/ui/glowing-effect";
import Image from "next/image";
import Link from "next/link"; // Import Link for social handles
import NavBar from "../_components/NavBar";
import Footer from "../_components/Footer";

// 3. Define a type for social links
type SocialLink = {
  href: string;
  icon: React.ReactNode;
  name: string;
};

// 4. Update GridItemProps to include socials
interface GridItemProps {
  area?: string; // Made area optional
  title: string;
  description: React.ReactNode;
  image: string;
  socials?: SocialLink[]; // Added socials prop
}

const GridItem = ({ area, title, description, image, socials }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area} `}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 ">
        <GlowingEffect
          blur={0}
          borderWidth={5}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl mt-20 p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
        
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>

            {/* 5. Add the Socials section */}
            {socials && socials.length > 0 && (
              <div className="flex items-center gap-4 mt-4">
                {socials.map((social) => (
                  <Link 
                    key={social.name} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            )}

          </div>
          {/* ---
            FIX #3: Made image more compact to fit on screen
            - Changed height from 280 to 200
            - Added object-position-top to focus on faces
            ---
          */}
          <Image src={image} 
            alt={title}
            width={1000}
            height={100}
            className="rounded-lg object-cover object-position-top w-full mt-4 "
            />
        </div>
      </div>
    </li>
  );
};

// 6. This is the new, full-page component
export default function Team() {
  return (
    // ---
    // FIX #1: Use flex-col and min-h-screen for sticky footer layout
    // ---
    <div className="flex flex-col min-h-screen dark:bg-black">
      <NavBar />

      {/* ---
        FIX #2: Use 'flex-grow' to push footer down
              'pt-28' for gap below navbar
              Removed 'justify-center'
        ---
      */}
      <main className="w-full flex-grow flex flex-col items-center mt-20 pt-28 pb-24 px-4">
        {/* ---
          FIX #3: Increased margin-bottom to mb-20 for more space
          ---
        */}
        <h2 className="text-4xl font-bold text-center mb-20 text-black dark:text-white">
          Meet the Team
        </h2>

        {/* ---
          FIX #4: Removed 'mt-5' to rely on heading's margin
          ---
        */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full  max-w-5xl" id="features">
          
          <GridItem
            title="Maulik Gaur"
            description="I was very keen on building this project to help students prepare for their exams effectively. "
            image="/maulik.jpg"
            socials={[
              { name: "LinkedIn", href: "https://linkedin.com/in/maulikgaur", icon: <Linkedin className="h-5 w-5" /> },
              { name: "GitHub", href: "https://github.com/maulik-g/", icon: <Github className="h-5 w-5" /> },
              { name: "Website", href: "https://maulikgaur.me", icon: <BriefcaseBusiness className="h-5 w-5" /> },
            ]}
          />
          
          <GridItem
            title="Aaradhya Maharishi"
            description="Practice with confidence. Make mistakes, stumble over words, and learn without the stress of a human interviewer."
            image="/aaradhya.png"
            socials={[
              { name: "LinkedIn", href: "https://www.linkedin.com/in/aaradhyamaharishi/", icon: <Linkedin className="h-5 w-5" /> },
              // { name: "GitHub", href: "#", icon: <Github className="h-5 w-5" /> },
            ]}
          />
          
        </ul>
      </main>

      <Footer />
    </div>
  );
}