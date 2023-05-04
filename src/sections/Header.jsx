import React from 'react';
import { LayoutHeader } from './../components/Layout';
import { HeaderData } from '../data/data.js';
import { Bars4Icon } from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <header className='fixed pt-10 pb-4 w-screen'>
      <LayoutHeader>
        <img src={HeaderData.logo.icon} alt={HeaderData.logo.title} />
        <nav className='hidden md:block'>
          <ul className='flex items-center gap-x-6 text-app-white font-semibold'>
            {HeaderData.nav.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </nav>
        <section className='hidden items-center gap-x-4 md:flex'>
          {HeaderData.social.map((item) => (
            <img key={item.id} src={item.icon} alt={item.title} />
          ))}
        </section>
        <Bars4Icon className='h-7 w-7 text-app-accent-500 md:hidden' />
      </LayoutHeader>
    </header>
  );
};

export default Header;
