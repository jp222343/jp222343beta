"use client";

import React from 'react';
import Link from 'next/link';

const Apps = () => {
  return (
    <div className="text-center sm:text-left flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <section className="p-6">
        <h1 className="text-4xl font-bold mb-4">Meus Aplicativos</h1>
        <p className="text-lg leading-relaxed mb-6">
          Aqui estão alguns dos aplicativos que desenvolvi. Adicionarei mais com o tempo.
        </p>
        <hr className="border-t border-gray-400 opacity-50 my-6" />
        <div className="text-center sm:text-left grid gap-6 sm:grid-cols-2">
          {/* Card for the To-Do App */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">To-Do List</h2>
            <p className="text-gray-400 mb-4">
              Um simples gerenciador de tarefas para te ajudar a organizar seus afazeres diários.
            </p>
            <Link href="/applications/todo" className="bg-blue-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full font-semibold shadow-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
              Abrir
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apps;
