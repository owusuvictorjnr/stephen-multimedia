'use client'
import data from '@/utils/data'
import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const Hero = ({ theme }) => {
  return (
    <div className="">
      <div className="overlay" />
      <div className="flex items-center">
        <video
          // src={`${theme === 'dartk' ? '/vid/video.mp4' : '/images/pic1.jpg'}`}
          src='/vid/video.mp4'
          autoPlay
          loop
          muted
          className="w-full"
        />
        <div className="content text-white flex items-center flex-col mt-[10rem]">
          <div data-aos="slide-up" data-aos-duration="1500" className="">
            <h1 className="capitalize font-bold text-2xl md:text-5xl lg:text-8xl">
              stephens photos
            </h1>{' '}
            <h4 className="tracking-wider text-sm md:text-xl">
              where stories unfold, frame by frame...
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
