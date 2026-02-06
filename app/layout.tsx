import { type Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  OrganizationSwitcher
} from '@clerk/nextjs'
 import { dark } from '@clerk/themes'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'SaaS Multitenant Boilerplate',
  description: 'Launch your apps 10x faster than when building everything from scratch',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {


  return (
    <ClerkProvider appearance={{theme:dark,}}>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen overflow-hidden flex flex-col relative`}>
          <header className="border-b border-[#ffffff1a] flex justify-between items-center p-3 gap-4 h-12 bg-[#101010]">
            <OrganizationSwitcher />
            <div className='flex items-center justify-end gap-4 h-full'>
              <div className="HeaderButton border border-[#ffffff3a] flex items-center justify-center pr-2 pl-2 text-xs text-[#ffffffb8] h-full rounded-full">
                Feedback
              </div>
              <div className="HeaderButton border border-[#ffffff3a] text-xs text-[#ffffffb8] w-fit h-full aspect-square flex items-center justify-center rounded-full">
                ?
              </div>
              <SignedOut>
                <SignInButton>
                  <button className="hover:bg-[#ffffff1a] transition rounded-xl text-white font-medium text-sm sm:text-small h-8 sm:h-8 px-3 sm:px-3 cursor-pointer">Sign in</button>
                </SignInButton>
                <SignUpButton>
                  <button className="bg-[#6c47ff] hover:bg-[#4019de] transition text-white rounded-xl font-medium text-sm sm:text-small h-8 sm:h-8 px-3 sm:px-3 cursor-pointer">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}