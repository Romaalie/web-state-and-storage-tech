'use client'

import Link from "next/link";

export default function Home() {

  const isDisabled = true; // Change this to control link state

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-20 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl sm:text-5xl font-bold text-center sm:text-left">
          The amazing world of State and Storage Mechanisms in Web Applications</h1>
        <div className="flex items-center justify-center w-full">
          <ul className="grid grid-cols-2 gap-6 items-center justify-center">
            <li>
              <Link
                className={`rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5
                  ${isDisabled ? "cursor-not-allowed text-gray-400" : "text-blue-500"}`}
                href={"/cookies"}
                onClick={(e) => {
                  if (isDisabled) {
                    e.preventDefault();
                  }
                }}>
                Cookies
              </Link>
            </li>
            <li>
              <Link
                className={`rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5
                  ${isDisabled ? "cursor-not-allowed text-gray-400" : "text-blue-500"}`}
                href={"/jwt"}
                onClick={(e) => {
                  if (isDisabled) {
                    e.preventDefault();
                  }
                }}
              > JWT (JSON Web Token)
              </Link>
            </li>
            <li>
              <Link
                className={`rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5
                  ${isDisabled ? "cursor-not-allowed text-gray-400" : "text-blue-500"}`}
                href={"/localstorage"}
                onClick={(e) => {
                  if (isDisabled) {
                    e.preventDefault();
                  }
                }}
              > Local Storage
              </Link>
            </li>
            <li>
              <Link
                className={`rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5
                  ${isDisabled ? "cursor-not-allowed text-gray-400" : "text-blue-500"}`
                } href={"/sessionid"}
                onClick={(e) => {
                  if (isDisabled) {
                    e.preventDefault();
                  }
                }}
              > Session ID
              </Link>
            </li>
          </ul>
        </div>
      </main>
      <footer className="row-start-3">
        <a>Work in progress...</a>
      </footer>
    </div>
  );
}
