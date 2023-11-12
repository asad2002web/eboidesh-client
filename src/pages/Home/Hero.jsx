import { Carousel } from 'keep-react'
import React from 'react'

const Hero = () => {
  return (
    <div className="h-56 w-full sm:h-64 my-10 md:my-16 lg:my-20 xl:h-96 2xl:h-96">
    <Carousel slideInterval={5000} showControls={true} indicators={true}>
      <img
        src="https://media.kitabghor.com/home/1697439288_i13yhpht_%E0%A6%95%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B0%E0%A6%89%E0%A6%A8%E0%A7%8D%E0%A6%A8%E0%A6%AF%E0%A6%BC%E0%A6%A8.png"
        alt="slider-1"
        height={400}
        width={910}
      />
      <img
        src="https://media.kitabghor.com/home/1691404747_i13yhpht_%E0%A6%AE%E0%A7%81%E0%A6%88%E0%A6%A8%E0%A7%81%E0%A6%B2%E0%A6%87%E0%A6%AE%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%A8.png"
        alt="slider-2"
        height={400}
        width={910}
      />
    </Carousel>
  </div>
  )
}

export default Hero