"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaGithub, FaServer, FaBars, FaTimes, FaTrash, FaTrashAlt } from "react-icons/fa"; // Importar ícones de remoção
import Breadcrumb from '../../components/Breadcrumb';
import { metadata } from './metadata';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showStorageMenu, setShowStorageMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowStorageMenu(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const clearLocalStorage = () => {
    localStorage.clear();
    alert("Todos os dados foram limpos!");
    setShowStorageMenu(false);
  };

  const deleteSpecificItem = (key: string) => {
    localStorage.removeItem(key);
    alert(`Item "${key}" foi removido!`);
    setShowStorageMenu(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Grand+Hotel&display=swap" rel="stylesheet"></link>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <header className="bg-gray-900 p-4 shadow-lg">
          <nav className="flex justify-between items-center max-w-6xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold">
              <Link href="/" className="grand-hotel-regular hover:text-gray-400 transition-colors duration-300">jp222343.app</Link>
            </h1>
            <button 
              onClick={toggleMenu}
              className="text-lg sm:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
            <div className={`flex items-center space-x-4 relative ${isMobile ? 'hidden' : 'sm:flex'}`}>
              <Link href="/bio" className="text-lg hover:text-gray-400 transition-colors duration-300">Biografia</Link>
              <Link href="/applications" className="text-lg hover:text-gray-400 transition-colors duration-300">Aplicativos</Link>
              <button 
                onClick={() => setShowStorageMenu(!showStorageMenu)} 
                className="flex items-center space-x-2 text-lg border border-gray-400 bg-transparent hover:bg-gray-700 hover:text-white transition-all duration-300 py-2 px-4 rounded-full relative group"
              >
                <FaServer className="text-xl" />
              </button>
              <a 
                href="https://github.com/jp222343" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-lg border border-gray-400 bg-transparent hover:bg-gray-700 hover:text-white transition-all duration-300 py-2 px-4 rounded-full relative group"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </nav>
          {menuOpen && isMobile && (
            <div className="flex flex-col items-start mt-2 sm:hidden bg-gray-900 w-full p-4 space-y-2">
              <Link href="/bio" className="text-lg hover:text-gray-400 transition-colors duration-300 w-full">Biografia</Link>
              <Link href="/applications" className="text-lg hover:text-gray-400 transition-colors duration-300 w-full">Aplicativos</Link>
              <button 
                onClick={() => setShowStorageMenu(!showStorageMenu)} 
                className="flex items-center space-x-2 text-lg border border-gray-400 bg-transparent hover:bg-gray-700 hover:text-white transition-all duration-300 py-2 px-4 rounded-full relative group w-full"
              >
                <FaServer className="text-xl" />
                <span>Gerenciar Local Storage</span>
              </button>
              <a 
                href="https://github.com/jp222343" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-lg border border-gray-400 bg-transparent hover:bg-gray-700 hover:text-white transition-all duration-300 py-2 px-4 rounded-full relative group w-full"
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </a>
            </div>
          )}
        </header>

        <Breadcrumb />

        {showStorageMenu && (
          <>
            <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
            <div ref={menuRef} className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 p-6 rounded-lg shadow-2xl z-50 w-full max-w-md transition-transform duration-300 ease-in-out">
              <h2 className="text-lg font-bold mb-4 text-white">Gerenciar Local Storage</h2>
              <div className="space-y-4">
                <button 
                  onClick={clearLocalStorage} 
                  className="flex items-center space-x-2 block w-full text-left text-red-500 hover:bg-gray-700 py-2 rounded transition duration-200 ease-in-out"
                >
                  <FaTrash className="text-xl" />
                  <span>Limpar Todos os Dados</span>
                </button>
                
                <div>
                  <input 
                    type="text" 
                    placeholder="Chave do item a remover" 
                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="itemKey" 
                  />
                  <button 
                    onClick={() => {
                      const key = (document.getElementById('itemKey') as HTMLInputElement).value;
                      deleteSpecificItem(key);
                    }} 
                    className="flex items-center space-x-2 block w-full text-left text-yellow-500 hover:bg-gray-700 py-2 rounded mt-2 transition duration-200 ease-in-out"
                  >
                    <FaTrashAlt className="text-xl" />
                    <span>Remover Item Específico</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

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
