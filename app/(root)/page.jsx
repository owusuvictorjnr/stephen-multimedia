'use client'

import Hero from '../../components/Hero/Hero'
import Image from 'next/image'

const ImageListData = {
  images: [
    {
      image: '/assets/pic1.jpg',
      aosDelay: '500',
    },

    {
      image: '/assets/pic2.jpg',
      aosDelay: '800',
    },

    {
      image: '/assets/pic3.jpg',
      aosDelay: '1000',
    },

    {
      image: '/assets/pic4.jpeg',
      aosDelay: '1300',
    },

    {
      image: '/assets/vitech.jpeg',
      aosDelay: '1500',
    },

    {
      image: '/assets/vitech2.jpeg',
      aosDelay: '1800',
    },

    {
      image: '/assets/vitech1.jpeg',
      aosDelay: '2000',
    },

    {
      image: '/assets/me.jpeg',
      aosDelay: '1500',
    },
  ],

  videos: [
    {
      video: '/vid/vid1.mp4',
      aosDelay: '800',
    },

    {
      video: '/vid/vid2.mp4',

      aosDelay: '1000',
    },

    {
      video: '/vid/vid3.mp4',
      aosDelay: '1500',
    },

    {
      video: '/vid/vid4.mp4',
      aosDelay: '1300',
    },

    {
      video: '/vid/vid5.mp4',
      aosDelay: '1800',
    },

    {
      video: '/vid/vid6.mp4',
      aosDelay: '2000',
    },
  ],
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <div className="mt-[2rem] md:mt-[4rem] lg:mt-[8rem]">
        <div className="capitalize text-sm mt-5 bg-base-300 shadow-md px-2 py-1 font-bold md:text-2xl">
          featured photos
        </div>
        <div className="mb-10 bg-base-300 min-h-[30rem] pb-10">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-10 lg:gap-10 mt-5 px-5 mb-4">
            {ImageListData.images.map((imgs) => (
              <div className="" key={imgs}>
                <div
                  data-aos="fade-up"
                  data-aos-duration={imgs.aosDelay}
                  className=""
                >
                  <Image
                    src={imgs.image}
                    alt={''}
                    height={1000}
                    width={1000}
                    className="card  shadow-md hover:scale-105 hover:cursor-pointer duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="md:flex md:justify-center px-5 mt-10">
            <button className="btn btn-active btn-ghost w-full md:w-[20rem] hover:bg-base-300 capitalize text-sm font-bold">
              more
            </button>
          </div>
        </div>

        <div className="capitalize text-sm mt-5 bg-base-300 shadow-md px-2 py-1 font-bold md:text-2xl">
          latest videos
        </div>
        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 px-5 mt-2 gap-10">
            {ImageListData.videos.map((vids) => (
              <div className="" key={vids}>
                <div
                  data-aos="zoom-in-left"
                  data-aos-duration={vids.aosDelay}
                  className=""
                >
                  <video
                    src={vids.video}
                    alt="videos"
                    autoPlay
                    loop
                    muted
                    className="hover:shadow-md hover:scale-105 hover:cursor-pointer duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="md:flex md:justify-center px-5 mt-10">
            <button className="btn btn-active btn-ghost w-full md:w-[20rem] hover:bg-base-300 capitalize text-sm font-bold">
              more
            </button>
          </div>
        </div>

        <div className="capitalize text-sm mt-5 bg-base-300 shadow-md px-2 py-1 font-bold md:text-2xl">
          services
        </div>
        <div className="px-5 bg-base-200 pb-10 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla error
          eaque numquam esse sapiente nemo pariatur animi sequi voluptatibus
          quas, obcaecati natus magnam ab. Eos ullam error eligendi atque
          dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nulla error eaque numquam esse sapiente nemo pariatur animi sequi
          voluptatibus quas, obcaecati natus magnam ab. Eos ullam error eligendi
          atque dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nulla error eaque numquam esse sapiente nemo pariatur animi
          sequi voluptatibus quas, obcaecati natus magnam ab. Eos ullam error
          eligendi atque dignissimos.
        </div>

        <div className="capitalize text-sm mt-5 bg-base-300 shadow-md px-2 py-1 font-bold md:text-2xl">
          testimonials
        </div>
      </div>
    </main>
  )
}
