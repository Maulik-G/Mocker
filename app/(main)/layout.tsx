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
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>

      <NavBar />
      
      {/* 2. Tell the main content to grow and fill empty space */}
      <main style={{ flexGrow: 1 }}>
        {children}
      </main>
      
      {/* 3. The footer will now be pushed to the bottom */}
      <Footer />
      
    </div>
    </>
  );
}