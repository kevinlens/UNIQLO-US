import React from 'react'
import MasterpieceIcon from '../../../assets/SVG/MasterpieceIcon'
import RedIcon from '../../../assets/SVG/RedIcon'
import Menu from './Menu'
const Header = () => {
  return (
    <div className='flex justify-between px-7 py-3 pr-8 h-15 border-b-1 border-iGrey'>
      <RedIcon />
      <MasterpieceIcon />
      <Menu />
    </div>
  )
}

export default Header
