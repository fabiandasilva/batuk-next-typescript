import Image from 'next/image';
import React from 'react';
import { Gif } from "@/public/index";

const Hero = () => {
    return (
        <div className="overflow-hidden desktop:pt-12 pt-20">
            <Image
                src={Gif}
                alt="Batuk new collection"
                objectFit="contain"
                objectPosition="center"
                className="tablet:h-500 w-full "
                height={500}
            />
        </div>
    );
};

export default Hero;
