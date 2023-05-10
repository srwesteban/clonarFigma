import React from 'react';
import { HeroData } from '../data/data.js';
import { LayoutHero } from '../components/Layout';
import { CloudArrowDownIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

const Hero = () => {
  return (
    <section className='pt-[200px] pb-[150px] font-roboto bg-custom'>
      <LayoutHero>
        <section className='flex flex-col items-center lg:flex-row lg:justify-between lg:items-end'>
          <aside className='text-center lg:text-left'>
            <section className='px-4 lg:w-[488px] lg:px-0'>
              <h1 className='font-semibold text-5xl text-app-white'>
                {HeroData.title}
              </h1>
              <p className='px-10 mt-4 text-lg text-app-white lg:px-0'>
                {HeroData.subTitle}
              </p>
            </section>
            <section className='flex flex-col gap-y-4 justify-center mt-12 px-6 sm:px-0 sm:gap-y-0 sm:gap-x-4 sm:flex-row lg:justify-start'>
              <button className='flex flex-row items-center justify-center gap-x-2 px-5 py-[10px] text-app-white bg-app-accent-500 rounded-[32px]'>
                <span>{HeroData.btnTextDownloadCv}</span>
                <CloudArrowDownIcon className='w-5 h-5' />
              </button>
              <button className='flex flex-row items-center justify-center gap-x-2 px-5 py-[10px] text-app-white bg-app-accent-500 rounded-[32px]'>
                <span>{HeroData.btnTextContact}</span>
                <EnvelopeIcon className='w-5 h-5' />
              </button>
            </section>
          </aside>
          <img
            src={HeroData.iconHero}
            alt='ui'
            className='mt-20 px-4 max-w-[425px] shadow-2xl sm:px-0 lg:mt-0 lg:rotate-3'
          />
        </section>
      </LayoutHero>
    </section>
  );
};

export default Hero;
