import React from 'react';
import { LayoutHeader } from './../components/Layout';
import logo from './../assets/images/logo.svg';
import twitter from './../assets/images/twitter.svg';
import github from './../assets/images/github.svg';
import instagram from './../assets/images/instagram.svg';

const Header = () => {
  return (
    <header className='py-4 bg-app-primary-600'>
      <LayoutHeader>
        <img src={logo} alt='logo' />
        <nav>
          <ul className='flex items-center gap-x-6 text-app-white font-semibold'>
            <li>Inicio</li>
            <li>Servicios</li>
            <li>Experiencia</li>
            <li>Proyectos</li>
            <li>Equipo</li>
          </ul>
        </nav>
        <section className='flex items-center gap-x-4'>
          <img src={twitter} alt='twitter' />
          <img src={github} alt='twitter' />
          <img src={instagram} alt='twitter' />
        </section>
      </LayoutHeader>
    </header>
  );
};

export default Header;
