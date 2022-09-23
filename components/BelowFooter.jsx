import Image from 'next/image'
import React from 'react'
import squares_vector from '../public/svg/squares_vector.svg'
import MOGH from '../public/svg/MOGH-logo.svg'
import MOGH_text from '../public/svg/MOG-text.svg'



const BelowFooter = () => {
  return (
    <div className='flex flex-col mt-[10px] relative items-center'>
        <div className='mx-auto absolute top-0 left-0'>
            <Image className='w-full h-full  scale-[1.4] ' alt='Squres vector' src={squares_vector} />
        </div>
        <div className=' flex gap-[8px] items-center'>
            <div className='w-[38px] h-auto'>
                <Image  alt='Mogh logo' src={MOGH} />
            </div>
            <div className=''>
                <div className='w-[90px] h-[18px] '>
                    <Image alt='Mogh text' src={MOGH_text} />
                </div>
                <p className='text-[10px] text-grayDimMOGH'>Open Source, MIT Licensed</p>
            </div>
        </div>     
    </div>
  )
}

export default BelowFooter