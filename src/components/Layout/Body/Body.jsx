import React from 'react'
import Section1_12 from './Section1_12'
import Section13_27 from './Section13_27'
import Section28_42 from './Section28_42'
import Section43_57 from './Section43_57'
import Section58_64 from './Section58_64'
const Body = () => {
  return (
    <div className='grid md:gap-2 md:grid-cols-6 -md:grid-cols-2 md:mx-7 -md:mx-1.5 md:mt-2 -md:mt-1.5'>
      <Section1_12 />
      <Section13_27 />
      <Section28_42 />
      <Section43_57 />
      <Section58_64 />
    </div>
  )
}

export default Body