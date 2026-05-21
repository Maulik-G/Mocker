'use client';

import React from "react";
import { BriefcaseBusiness, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import NavBar from "../_components/NavBar";
import Footer from "../_components/Footer";
import "@/app/globals.css";

type SocialLink = {
  href: string;
  icon: React.ReactNode;
  name: string;
};

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  image: string;
  socials: SocialLink[];
  delay?: number;
}

const TeamMemberCard = ({ name, role, description, image, socials, delay = 0 }: TeamMemberProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      className="group relative bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center p-8 pt-10"
    >
      {/* Circular Avatar overlapping the top */}
      <div className="absolute -top-16 w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-xl bg-gray-100 dark:bg-gray-800">
        <Image 
          src={image} 
          alt={name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
          sizes="128px"
        />
      </div>

      {/* Content Area */}
      <div className="mt-8 mb-6 z-10 w-full">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight mb-1">
          {name}
        </h3>
        <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
          {role}
        </p>
      </div>

      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-4 pt-6 border-t border-gray-100 dark:border-gray-800 w-full">
        {socials.map((social) => (
          <Link 
            key={social.name} 
            href={social.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all"
            aria-label={social.name}
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default function Team() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 font-sans selection:bg-blue-200 dark:selection:bg-blue-900">
      <NavBar />
      
      <main className="w-full flex-grow relative overflow-visible pt-12 pb-24">
        {/* Subtle decorative background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-[100px] opacity-60 pointer-events-none z-0"></div>

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          
          <div className="text-center mb-16 mt-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6"
            >
              Meet the Team
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
            >
              The creators behind Mocker, dedicated to building the ultimate exam preparation platform for students.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 max-w-4xl mx-auto mt-20">
            
            <TeamMemberCard
              name="Maulik Gaur"
              role="Lead Developer & Co-Founder"
              description="I lead product development and work on delivering a smooth, fast user experience. I build and maintain the core backend, frontend, and test engine systems. I combine product insight with technical expertise to ensure strong performance and stability."
              image="/maulik.jpg"
              delay={0.2}
              socials={[
                { name: "LinkedIn", href: "https://linkedin.com/in/maulikgaur", icon: <Linkedin className="w-5 h-5" /> },
                { name: "GitHub", href: "https://github.com/maulik-g/", icon: <Github className="w-5 h-5" /> },
                { name: "Website", href: "https://maulikgaur.me", icon: <BriefcaseBusiness className="w-5 h-5" /> },
              ]}
            />
            
            <TeamMemberCard
              name="Aaradhya Maharishi"
              role="Product Engineer & Co-Founder"
              description="I focus on the product experience, making the platform simple and effective. I manage the database, question structure, and ensure all content stays accurate. I blend product thinking with technical skills to keep everything organized and reliable."
              image="/aaradhya.png"
              delay={0.4}
              socials={[
                { name: "LinkedIn", href: "https://www.linkedin.com/in/aaradhyamaharishi/", icon: <Linkedin className="w-5 h-5" /> },
                { name: "GitHub", href: "https://github.com/Aaradhya1807", icon: <Github className="w-5 h-5" /> },
              ]}
            />
            
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}