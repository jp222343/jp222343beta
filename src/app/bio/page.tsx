"use client";

import React from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const BioPage = () => {
  return (
    <div className="text-center sm:text-left flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <main className="flex flex-col justify-center items-center flex-1 p-4 sm:p-6">
        <section className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg max-w-2xl w-full">
          <header className="text-center mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-5xl font-bold mb-2">jp222343</h1>
            <p className="text-lg sm:text-xl text-gray-400">Desenvolvedor Hobbista</p>
          </header>

          <article className="text-base sm:text-lg leading-relaxed space-y-4 sm:space-y-6">
            <p>
              Sou um desenvolvedor de software com pequenos 4 anos de experiência em desenvolvimento. Comecei este hobby programando em Lua, em algumas engines de video-games. Gosto de criar (e recriar) algumas tecnologias utilizando linguagens como <strong>React</strong> <strong>(Next.js)</strong>, <strong>Node.js</strong>, <strong>JavaScript</strong>, <strong>Lua</strong>, <strong>Python</strong>, e <strong>HTML/CSS (Tailwind incluso)</strong>. Sempre busco novas formas de melhorar a eficiência 
              dos projetos e a experiência do usuário.
            </p>
            <p>
              Em meus momentos livres, exploro novas coisas como
              frameworks.
            </p>
            <p>
              Enquanto não estou utilizando meus dispositivos (Computador e celular), Pratico hábitos como estudos frequentes e leitura, especialmente sobre tópicos científicos e tecnologia, ciências (Humanas), ler/escrever, astronomia, diversos tópicos de exatas, e linguagens! Essas atividades me ajudam a manter uma rotina estável (Porém cansativa).
            </p>
          </article>

          <div className="flex justify-center mt-6 sm:mt-8 space-x-4">
            
          </div>
        </section>
      </main>
    </div>
  );
};

export default BioPage;
