import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('footer');
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="container">
      <div className="relative z-10 mt-3 flex flex-col items-center justify-center border-t border-neutral-700 py-10 pb-20 md:py-10">
        <div className="flex flex-row items-center text-center text-xs text-gray-500 dark:text-slate-200">
          © {getYear()} by{' '}
          <a
            href="https://www.linkedin.com/in/adityahimaone"
            target="_blank"
            className="ml-1 text-gray-500 transition-all hover:text-gray-700 dark:text-slate-200 dark:hover:text-gray-200"
          >
            Aditya Himawan
          </a>
          <div className="mx-2 h-5 border-r border-gray-400"></div>
          <a
            href="http://bento-adityahimaone.vercel.app"
            target="_blank"
            className="text-gray-500 transition-all hover:text-gray-700 dark:text-slate-200 dark:hover:text-gray-200"
          >
            bento version
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
