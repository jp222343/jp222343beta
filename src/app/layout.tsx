import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import React from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "jp222343 App",
  description: "Trabalho em progresso...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Grand+Hotel&display=swap" rel="stylesheet"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="text-center sm:text-left bg-gray-900 p-4 sm:p-6 shadow-lg">
          <nav className="text-center sm:text-left flex justify-between items-center max-w-6xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold">
              <Link href="/" className="grand-hotel-regular hover:text-gray-400 transition-colors duration-300">jp222343.app</Link>
            </h1>
            <div className="flex items-center space-x-4 relative">
              <Link href="/bio" className="text-lg hover:text-gray-400 transition-colors duration-300">Biografia</Link>
              <a 
                href="https://github.com/jp222343" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-lg border border-gray-400 bg-transparent hover:bg-gray-700 hover:text-white transition-all duration-300 py-2 px-4 rounded-full relative group"
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>

               
                <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-700 text-white text-sm rounded-lg py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Perfil do Github
                </span>
              </a>
            </div>
          </nav>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="w-full fixed bottom-0 text-center">
          <Link href="/" className="grand-hotel-regular hover:text-gray-400 transition-colors duration-300">jp222343.app</Link>
        </footer>
      </body>
    </html>
  );
}
