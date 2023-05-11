import React from 'react';

const ItemService = ({ data }) => {
  return (
    <aside className='flex flex-row items-center justify-between w-[700px]'>
      <img src={data.icon} alt={data.title} />
      <section>
        <h2 className='text-app-white font-extrabold text-lg'>{data.title}</h2>
        <p className='mt-3 text-app-white font-light text-sm'>
          {data.subTitle}
        </p>
      </section>
    </aside>
  );
};

export default ItemService;
