import Image from 'next/image';
import React from 'react';
import { Gif } from "@/public/index";

const Hero = () => {
    return (
        <div className="overflow-hidden desktop:pt-12 pt-20">
            <div className="relative h-fit desktop:h-[80vh] overflow-hidden">
                <Image
                    src={Gif}
                    alt="Batuk new collection"
                    objectFit="contain"
                    objectPosition="center"
                    className="w-full h-fit"
                />
            </div>
        </div>
    );
};

export default Hero;
