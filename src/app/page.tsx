"use client";

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaCoffee } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="text-center sm:text-left flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <section className="p-6">
        <h1 className="text-4xl font-bold mb-4">jp222343: Um pouco sobre mim</h1>
        <p className="text-lg leading-relaxed mb-6">
          Sou um desenvolvedor hobbista, ou melhor dizendo, apenas um programador entediado.
          <br /><br />
          <FaCoffee className="m-auto flex justify-center content-center" />
        </p>
        <hr className="border-t border-gray-400 opacity-50 my-6" />
        <div className="text-center sm:text-left grid gap-6 sm:grid-cols-2">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Projetos Recentes</h2>
            <p className="text-gray-400">
              Recentemente eu venho ampliando habilidades em alguns frameworks, enquanto aprendia a utilizar novos, como o Next.JS, por exemplo.
            </p>
          </div>
          <div className="text-center sm:text-left bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Exploração de Novas Tecnologias</h2>
            <p className="text-gray-400">
                Quando eu descubro alguma tecnologia interessante (Repositórios no Github, APIs, frameworks, etc) eu costumo transformá-los em projetos fáceis de utilizar, e com interface intuitiva.
            </p>
          </div>
          <div className="text-center sm:text-left bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-center sm:text-left text-2xl font-semibold mb-2">Sobre este site</h2>
            <p className="text-gray-400">
              Este website foi criado com o propósito de testar funções do <strong>Tailwind CSS, e React (Next.js)</strong>, no entanto, estou pensando em publicar novas atualizações com o tempo.
            </p>
          </div>
          <div className="text-center sm:text-left bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Sobre Mim</h2>
            <p className="text-gray-400">
              Além da tecnologia, tenho interesse em outros tópicos, sendo eles: Ciências (Humanas), ler/escrever, astronomia, diversos tópicos de exatas, e linguagens!
              <br /><br />
              <Link href="/bio" className="bg-azure text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full font-semibold shadow-md hover:bg-blue-500 transition-all duration-300">Acessar a biografia</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
