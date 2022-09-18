import React from 'react'
import Image from 'next/image'
import MOG from '../public/svg/MOGH-logo.svg'
import MOG_text from '../public/svg/MOG-text.svg'
import Link from 'next/link'

const HeaderForProfile = () => {
  return (
    <div className='flex justify-end px-4'>        
        <Link href={"/"}>
          <div className='flex items-center cursor-pointer group'>
              <div className='flex justify-center w-[50px] border-white transition bg-opacity-10  duration-500 ease-in border-[1px] hover:border-[2px] hover:border-primaryTwo rounded-full h-[50px] tablet:w-[50px] tablet:h-[50px] m-4'>
                  <Image src={MOG} width={40} height={40} alt="MOG Logo" />
              </div>
              {/* <div className='flex justify-center w-[110px] h-[110px] tablet:w-[100px] tablet:h-[100px]'>
                  <Image src={MOG_text} width={100} height={100} alt="MOG Logo" />
                </div> */}
          </div>
      </Link>
    </div>
  )
}

export default HeaderForProfile