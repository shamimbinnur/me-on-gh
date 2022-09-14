import React from 'react'
import Image from 'next/image'
import MOG from '../public/svg/MOGH-logo.svg'
import MOG_text from '../public/svg/MOG-text.svg'

const HeaderForProfile = () => {
  return (
    <div className='flex justify-end px-4'>        
        <div className='flex items-center'>
            <div className='flex justify-center w-[50px] h-[50px] tablet:w-[60px] tablet:h-[60px]'>
                <Image src={MOG} width={40} height={40} alt="MOG Logo" />
            </div>
            <div className='flex justify-center w-[110px] h-[110px] tablet:w-[100px] tablet:h-[100px]'>
                <Image src={MOG_text} width={100} height={100} alt="MOG Logo" />
            </div>
        </div>
    </div>
  )
}

export default HeaderForProfile