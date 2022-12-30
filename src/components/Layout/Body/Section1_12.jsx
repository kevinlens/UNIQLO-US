import React from 'react'

const Section1_12 = () => {
  return (
    <div className='grid md:gap-2 -md:gap-1.5 md:grid-cols-6 -md:grid-cols-2 col-span-full'>
      
      <div className='aspect-square md:col-span-2 md:row-span-2 relative'>
          <div className='h-full bg-1 bg-cover bg-center bg-no-repeat'></div>
          <div className='bg-white h-full w-full opacity-0 hover:opacity-80 duration-300 flex flex-col justify-center text-sm absolute text-center top-0'>
            <h4 className='text-xs mb-3'>BOTTOMS</h4>
            <p>Ultra Stretch High-Rise Skinny-Fit Jeans</p>
          </div>
      </div>
      
      <div className='aspect-square relative'>
          <div className='h-full bg-2 bg-cover bg-center bg-no-repeat'></div>
          <div className='text-xs bg-white h-full w-full opacity-0 hover:opacity-80 duration-300 flex flex-col justify-center px-2 absolute text-center top-0'>
            <h4 className='mb-3'>Shirts</h4>
            <p>Flannel Checked Long-Sleeve Shirt</p>
          </div>
      </div>
      
      <div className='aspect-square relative'>
          <div className='h-full bg-3 bg-cover bg-center bg-no-repeat'></div>
          <div className='text-xs bg-white h-full w-full opacity-0 hover:opacity-80 duration-300 flex flex-col justify-center px-2 absolute text-center top-0'>
            <h4 className='mb-3'>Bottoms</h4>
            <p>Selvedge Stretch Slim-Fit Jeans</p>
          </div>
      </div>
      <div className='aspect-square relative'>
          <div className='h-full bg-4 bg-cover bg-center bg-no-repeat'></div>
          <div className='text-xs bg-white h-full w-full opacity-0 hover:opacity-80 duration-300 flex flex-col justify-center px-2 absolute text-center top-0'>
            <h4 className='mb-3'>Accessories</h4>
            <p>2-Way Boston Bag</p>
          </div>
      </div>
      <div className='aspect-square relative'>
          <div className='h-full bg-5 bg-cover bg-center bg-no-repeat'></div>
          <div className='text-xs bg-white h-full w-full opacity-0 hover:opacity-80 duration-300 flex flex-col justify-center px-2 absolute text-center top-0'>
            <h4 className='mb-3'>Shirts</h4>
            <p>Easy Care Stretch Slim-Fit Long-Sleeve Shirt</p>
          </div>
      </div>

      {/* ------------------------------------------------ */}

      <div className='aspect-square relative'>
          <div className='h-full bg-6 bg-cover bg-center bg-no-repeat'></div>
          <div className='text-xs bg-white h-full w-full opacity-0 hover:opacity-80 duration-300 flex flex-col justify-center px-2 absolute text-center top-0'>
            <h4 className='mb-3'>Bottoms</h4>
            <p>Ultra Stretch Jeans</p>
          </div>
      </div>

      {/* text-[calc(.5vw+.5vh)] allows for text to adjust size based on container width/height */}
      <div className='aspect-square col-span-2 row-span-2 flex flex-col justify-center px-10 py-1 text-center md:text-[calc(.5vw+.5vh)] relative '>
          <img className='md:h-[calc(2vw+2vh)] -md:h-[calc(5vw+5vh)]' src='/src/assets/images/Masterpiece.svg' alt=''></img>
          <h3 className='py-3 -md:text-[calc(2vw+2vh)] -md:font-light'>Everyday clothing, made even better.</h3>
          <p>We believe that evolving life’s essentials can improve our lives.
             It’s why we infuse originality and ingenuity into every aspect of the clothes we make.</p>
          <p>Everyday basics that are constantly being innovated
          and updated to reflect the times. </p>
          <p>Our goal is to create clothes designed for life’s needs. </p>
          <div className='mt-8 py-2 w-9/12 self-center border-1 border-black cursor-pointer'>View list of products</div>
      </div>

      <div className='aspect-square relative'>
          <div className='h-full bg-8 bg-cover bg-center bg-no-repeat'></div>
          <div className='text-xs bg-white h-full w-full opacity-0 hover:opacity-80 duration-300 flex flex-col justify-center px-2 absolute text-center top-0'>
            <h4 className='mb-3'>Innerwear</h4>
            <p>AIRism Period High-Rise Briefs</p>
          </div>
      </div>

      {/* ------------------------------------------------ */}

      <div className='aspect-square relative'>
          <div className='h-full bg-9 bg-cover bg-center bg-no-repeat'></div>
          <div className='text-xs bg-white h-full w-full opacity-0 hover:opacity-80 duration-300 flex flex-col justify-center px-2 absolute text-center top-0'>
            <h4 className='mb-3'>cut + sewn</h4>
            <p>Smooth Stretch Cotton Turtleneck Long-Sleeve T-Shirt</p>
          </div>
      </div>
      <div className='aspect-square relative'>
          <div className='h-full bg-10 bg-cover bg-center bg-no-repeat'></div>
          <div className='text-xs bg-white h-full w-full opacity-0 hover:opacity-80 duration-300 flex flex-col justify-center px-2 absolute text-center top-0'>
            <h4 className='mb-3'>cut + sewn</h4>
            <p>3D Knit Seamless Cotton Dolman Sleeve Sweater</p>
          </div>
      </div>
      <div className='aspect-square relative'>
          <div className='h-full bg-11 bg-cover bg-center bg-no-repeat'></div>
          <div className='text-xs bg-white h-full w-full opacity-0 hover:opacity-80 duration-300 flex flex-col justify-center px-2 absolute text-center top-0'>
            <h4 className='mb-3'>cut + sewn</h4>
            <p>Extra Fine Merino Crew Neck Long-Sleeve Sweater</p>
          </div>
      </div>
      <div className='aspect-square relative'>
          <div className='h-full bg-12 bg-cover bg-center bg-no-repeat'></div>
          <div className='text-xs bg-white h-full w-full opacity-0 hover:opacity-80 duration-300 flex flex-col justify-center px-2 absolute text-center top-0'>
            <h4 className='mb-3'>cut + sewn</h4>
            <p>Crew Neck Long-Sleeve Sweatshirt</p>
          </div>
      </div>

      <div className='aspect-square relative md:hidden'>
          <div className='h-full bg-48 bg-cover bg-center bg-no-repeat'></div>
          <div className='text-xs bg-white h-full w-full opacity-0 hover:opacity-80 duration-300 flex flex-col justify-center px-2 absolute text-center top-0'>
            <h4 className='mb-3'>cut + sewn</h4>
            <p>Crew Neck Long-Sleeve Sweatshirt</p>
          </div>
      </div>
      

    </div>
  )
}

export default Section1_12