import React from 'react';
import { NewCollectionSlide } from "@/public/index";
import { Button } from '@/app/components/index';
import Image from 'next/image';

interface Props {
  title: string;
}

const SliderSection: React.FC<Props> = ({ title }) => {
  return (
    <section className='max-w-screen mx-auto px-2 container relative flex justify-center flex-col items-center'>
      <h2 className='font-bold text-xl desktop:text-3xl text-center uppercase py-8'>{title}</h2>      
      <div className='flex justify-center relative group hover:opacity-75 w-4/5'>
        <Image src={NewCollectionSlide} alt="Nueva temporada" className="w-full" />        
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition hover:shadow-md bg-black-60 bg-opacity-100'>
          <div className='text-white pt-5'>
            <Button>Ver más</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
