'use client';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { 
  SignInButton,  
  UserButton,
  useAuth
} from '@clerk/nextjs';
import "@/app/globals.css"

function NavBar() {
  const { isSignedIn, isLoaded } = useAuth();

  return (
      <nav> 
        <div className="nav-container">
          {/* Use Link for the logo as well */}
          <Link href="/" className="logo"> 
            <Image
              src="/logo-icon.svg" alt = "Mocker"
              width={50}
              height={50}
              // className="logo-image"
            />
          </Link>
          
          <div className="nav-links">
            {/* Use the 'href' prop for the destination path */}
            <Link href="/">Home</Link>
            <Link href="/mocks">Mocks</Link>
            {isLoaded && isSignedIn && (
              <>
                <Link href="/dashboard">Dashboard</Link>
                {/* The UserButton shows a profile icon and menu */}
                <UserButton /> 
              </>
            )}
          
            {isLoaded && !isSignedIn && (
              <SignInButton mode="modal">
                <button className="btn btn-primary">
                  Login
                </button>
              </SignInButton>
            )}
          </div>
        </div>
      </nav>
  )
}

export default NavBar;