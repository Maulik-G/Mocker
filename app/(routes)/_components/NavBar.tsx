'use client';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { 
  SignInButton,  
  SignedIn, 
  SignedOut, 
  UserButton 
} from '@clerk/nextjs';
import "@/app/globals.css"

function NavBar() {
  return (
      <nav> 
        <div className="nav-container">
          {/* Use Link for the logo as well */}
          <Link href="/" className="logo"> 
            <Image
              src="/data/images/logo.png" alt = "Mocker Logo"
              width={30}
              height={30}
              className="logo-image"
            />
            🎯 Mocker 
          </Link>
          
          <div className="nav-links">
            {/* Use the 'href' prop for the destination path */}
            <Link href="/">Home</Link>
            <Link href="/mocks">Mocks</Link>
            <SignedIn>
            <Link href="/dashboard">Dashboard</Link>
            {/* The UserButton shows  a profile icon and menu */}
            <UserButton afterSignOutUrl="/" /> 
            </SignedIn>
          
            <SignedOut>
            
              <SignInButton mode="modal">
                <button className="btn btn-primary">
                  Login
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </nav>
  )
}

export default NavBar;