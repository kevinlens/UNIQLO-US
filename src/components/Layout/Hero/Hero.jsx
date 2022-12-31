import React from 'react';

const Hero = () => {
  return (
    <div className='md:mt-1 md:mx-7 relative'>
        <video className='-md:hidden' src='/assets/videos/uniqlo_video.mp4' autoPlay={true} muted loop></video>
        <video className='md:hidden ' src='/assets/videos/hero-video.mp4' autoPlay={true} muted loop></video>

        <div className='flex flex-col items-center gap-y-4 text-white absolute right-0 left-0 top-[36%]'>
          {/* text-[calc(.5vw+.5vh)] allows for text to adjust size based on container width/height */}
          <h1 className='text-[calc(2.5vw+2.5vh)] -mb-5 font-uniqloLight tracking-wide'>TODAY’S CLASSICS</h1>
          <p className='text-[calc(1vw+1vh)] tracking-widest font-light'>Timeless beauty</p>
          <div className='w-[calc(6vw+6vh)] object-cover mb-4'>
            <img src='/assets/images/Masterpiece.png' alt=''></img>
          </div>
          <div className='md:py-[calc(.4vw+.4vh)] md:w-[calc((324/1176)*80vw)] -md:w-48 -md:py-1 text-center border-1 border-white cursor-pointer'>
            Featured Content
          </div>
        </div>

    </div>
  );
};

export default Hero;