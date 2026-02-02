import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
          <header className="flex justify-end items-center p-3 gap-4 h-12">
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
          </header>
          {children}
    </ClerkProvider>
  )
}