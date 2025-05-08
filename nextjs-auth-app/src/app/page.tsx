'use client';

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <>
      <Navbar />
      <div className="grid grid-rows-[1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-1 items-center sm:items-start">
          <div className="flex flex-col items-center gap-4">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
            <h1 className="text-3xl font-bold text-center">
              Next.js with TypeScript, Tailwind CSS, and Authentication
            </h1>
          </div>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            {status === 'authenticated' ? (
              <>
                <Link
                  className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                  href="/dashboard"
                >
                  Go to Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                  href="/auth/signin"
                >
                  Sign In
                </Link>
              </>
            )}
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Next.js Docs
            </a>
          </div>

          <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">Features Included:</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Next.js 14 with App Router</li>
              <li>TypeScript for type safety</li>
              <li>Tailwind CSS for styling</li>
              <li>NextAuth.js for authentication</li>
              <li>Responsive design</li>
              <li>Protected routes</li>
            </ul>
          </div>
        </main>

        <footer className="row-start-2 flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </>
  );
}
