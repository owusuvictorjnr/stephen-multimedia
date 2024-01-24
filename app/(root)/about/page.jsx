import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className="h-screen bg-[#e5e5e5]">
      <div className=" place-items-center">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="flex justify-center"
        >
          <Image
            src="/assets/me.jpeg"
            alt="me"
            height={500}
            width={500}
            className=" h-[25rem] w-[25rem] px-5 rounded-full"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="lg:px-[20rem] px-5 mt-5 container mx-auto text-sm md:text-xl"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          deserunt! Impedit exercitationem repellendus doloribus dolorem quod
          tenetur? Delectus pariatur natus nemo. Et fugiat excepturi, amet,
          neque animi aliquam iusto facilis laboriosam dolor modi assumenda
          deleniti rem aspernatur porro at nulla eos fuga dolorem in!
          Exercitationem aspernatur debitis incidunt ad necessitatibus accusamus
          animi, quidem atque earum sit nesciunt cum quo numquam delectus vero
          mollitia aut at repellat est sunt in consectetur accusantium harum.
          Dignissimos quos iste esse ratione cum veritatis omnis voluptas,
          numquam pariatur veniam aperiam harum non, praesentium officia
          accusantium nostrum suscipit mollitia. Nesciunt dolorum corrupti
          soluta! Facere, repudiandae numquam!
        </div>
      </div>
    </div>
  )
}

export default AboutPage
