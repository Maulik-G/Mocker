// app/(main)/layout.tsx
// import { Header } from '@/(routes)/_components/NavBar' // Import your header
'use client';
import '../globals.css'; // <-- CORRECT
import NavBar from '../(routes)/_components/NavBar';
import Footer from '../(routes)/_components/Footer';


// This layout component will wrap all pages inside the (main) folder
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      
      <main>
        {children}
      </main>

      <Footer />
    </>
  );
}