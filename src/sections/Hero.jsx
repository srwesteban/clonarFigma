import React from 'react';
import { HeroData } from '../data/data.js';
import { LayoutHero } from '../components/Layout';

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
            <section className='flex justify-center gap-x-4 mt-12 lg:justify-start'>
              <button className='px-5 py-[10px] text-app-white bg-app-accent-500 rounded-[32px]'>
                {HeroData.btnTextDownloadCv}
              </button>
              <button className='px-5 py-[10px] text-app-white bg-app-accent-500 rounded-[32px]'>
                {HeroData.btnTextContact}
              </button>
            </section>
          </aside>
          <img
            src={HeroData.iconHero}
            alt='ui'
            className='mt-20 max-w-[425px] shadow-2xl rotate-3'
          />
        </section>
      </LayoutHero>
    </section>
  );
};

export default Hero;
