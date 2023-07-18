"use client";

import './globals.css'
import Image from "next/image"
import bedrock from "../../public/bedrock.svg"
import grass from "../../public/grass.svg"
import subsoil from "../../public/subsoil.svg"
import topsoil from "../../public/topsoil.svg"
import weatheredRocks from "../../public/weathered-rocks.svg"
import logo from "../../public/lg-logo.png"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useEffect, useState } from 'react';

export default function Home() {

  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getOffset = (screenWidth) => {
    if (screenWidth < 468) {
      return [0, 0.28, 0.48, 0.65, 0.8];
    } else if (screenWidth >= 468  && screenWidth <= 1024) {
      return [0, 0.45, 0.5, 0.7, 0.89];
    } else {
      return [0, 0.38, 0.65, 0.8, .99];
    }
  };

  const getSpeed = (screenWidth) => {
    if (screenWidth < 468) {
      return [0.2, 0.5, 0.6, 0.7, 0.8];
    } else if (screenWidth >= 468 && screenWidth < 1024) {
      return [0.3, 0.4, 0.6, 0.7, 0.8];
    } else {
      return [0.18, 0.3, 0.5, 0.6, 0.7];
    }
  };

  const getPages = (screenWidth) => {
    if (screenWidth < 468) {
      return [1.5];
    } else if (screenWidth >= 468 && screenWidth < 1024) {
      return [1.8];
    } else {
      return [2];
    }
  };

  const offset = getOffset(screenSize.width);
  const speed = getSpeed(screenSize.width);
  const pages = getPages(screenSize.width);

  
  return (
    <div>
    <Parallax pages={pages}>
      <ParallaxLayer offset={offset[0]} speed={speed[0]}>
        <Image 
        className='flex justify-center mx-auto py-12 phone:px-12 w-auto phone:h-30 tablet:h-48 laptop:h-50 desktop:h-60' 
        src={logo} alt=''/>
        <Image src={grass} alt='' />
      </ParallaxLayer>

      <ParallaxLayer offset={offset[1]} speed={speed[1]}>
        <Image src={topsoil} alt='' />
      </ParallaxLayer>

      <ParallaxLayer offset={offset[2]} speed={speed[2]}>
        <Image src={subsoil} alt='' />
      </ParallaxLayer>

      <ParallaxLayer offset={offset[3]} speed={speed[3]}>
        <Image src={weatheredRocks} alt='' />
        <div className='main-container'/>
      </ParallaxLayer>

      <ParallaxLayer offset={offset[4]} speed={speed[4]}>
      <Image src={bedrock} alt='' />
        <div className='main-container text-center pt-10 px-10'>
        <h2 className='title font-bold tracking-widest pb-2'>What we do</h2>
          <p className='p text-sm'>From farm to fork, we deliver the season's
          best produce right to your door. Fresh, organic, delicious food just for you!</p>

          <h2 className='title font-bold tracking-widest pt-8 pb-2'>Where we're located</h2>
          <p className='p text-sm'>We are located about 30 minutes outside of Portland, Oregon,
          and do deliveries within the Portland Metro Area.</p>
        </div>
        
      </ParallaxLayer>
    </Parallax>
  </div>
  )
}
