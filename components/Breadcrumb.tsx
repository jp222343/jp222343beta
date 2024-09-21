"use client";
import React from 'react'; // Importar React
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Breadcrumb = () => {
  const pathname = usePathname();

  const generateBreadcrumbs = () => {
    const pathSegments = pathname.split('/').filter(segment => segment);
    return pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      return (
        <React.Fragment key={index}>
          <Link href={href} className="hover:text-gray-400 capitalize">
            {segment.replace(/-/g, ' ')}
          </Link>
          {index < pathSegments.length - 1 && <span className="mx-2"> / </span>} {/* Espaço antes e depois da barra */}
        </React.Fragment>
      );
    });
  };

  return (
    <nav className="bg-gray-800 p-5 text-gray-300">
      {generateBreadcrumbs()}
    </nav>
  );
};

export default Breadcrumb;
