import React from 'react'
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <div className='block relative w-full h-[100vh]'>
        <Image src="/homeheader.png" alt="hero" layout='fill' objectFit='cover'/>
        <div className='relative pt-[70vh] lg:pl-32 px-16'>
            <Button type="button" title='SHOP NOW' variant='btn_white_text' full />
        </div>
    </div>
  )
}

export default Hero