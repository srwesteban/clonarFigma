import React from 'react';
import { ServiceData } from '../data/data.js';

const Services = () => {
  return (
    <section className='py-20'>
      <aside className='flex flex-col items-center text-app-white'>
        <h1 className='font-semibold text-5xl'>{ServiceData.header.title}</h1>
        <p className='mt-4 max-w-[705px] text-lg text-center'>
          {ServiceData.header.subTitle}
        </p>
      </aside>
    </section>
  );
};

export default Services;
