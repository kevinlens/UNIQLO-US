import React from 'react';

const Hero = () => {
  return (
    <div className='mt-1 mx-7'>
      <div className='relative'>
        <video src='/src/assets/videos/uniqlo_video.mp4' autoPlay loop></video>

        <div className='flex flex-col items-center gap-y-4 text-white absolute left-1/2 top-[55%] -translate-y-2/4 -translate-x-2/4'>
          <h1 className='text-[3.5rem] -mb-5 font-uniqloLight tracking-wide'>TODAY’S CLASSICS</h1>
          <p className='text-[1.6rem] tracking-widest font-light'>Timeless beauty</p>
          <div class='w-32 object-cover mb-8'>
            <img src='/src/assets/images/Masterpiece.png' alt=''></img>
          </div>
          <div className='py-2 px-24 border-1 border-white cursor-pointer'>
            Featured Content
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;