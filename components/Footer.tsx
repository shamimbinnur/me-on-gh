import Image from 'next/image'
import React, { FC } from 'react'
import fbIcon from '../public/svg/social/facebook.svg'
import twitterIcon from '../public/svg/social/twitter.svg'
import gitHubIcon from '../public/svg/social/github.svg'

interface FooterProps{
  footer: [
      {
          placeholder: string
          link: string
      }
  ]
}
const Footer:FC<FooterProps> = ({footer})=> {
  return (
    <div className='mx-auto bg-skyMOGH rounded-[10px] '>
      <div className='px-[20px] py-[20px] tablet:py-[50px] tablet:px-[20px] flex justify-center  bg-secondary rounded-[10px]'>
        <ul className='grid grid-flow-row grid-cols-2 tablet:grid-cols-5 gap-x-10 gap-y-2 text-white font-medium text-[14px] tablet:text-[16px] laptop:text-[18px]'>
        {
          footer.map( nav => (
            <div key={nav.placeholder}>
              <li ><a href={nav.link}>{nav.placeholder}</a></li>
            </div>
          ))
        }
        </ul>
      </div>
      
      <div className='flex w-full px-[10px] py-[40px] flex-col tablet:flex-row gap-y-10 items-center tablet:justify-between bg-cyanDim'>
        <div>
          <h6 className='tablet:text-[22px] laptop:text-[25px] text-primaryTwo font-medium'>Anything in mind? Create an issue!</h6>
          <p className='tablet:text-[14px] laptop:text-[16px] text-secondary '>
            <a href="https://github.com/shamimbinnur/me-on-gh/issues/new"> Click here.</a>
          </p>
        </div>

        <div className='flex gap-[10px]'>
          <a href="https://github.com/shamimbinnur/me-on-gh">
            <div className='w-[26px] h-[26px] tablet:w-[28px] laptop:w-[36px] laptop:h-[36px]' >
              <Image alt='GitHub Icon' src={gitHubIcon} width={36} height={36} />
            </div>
          </a>
          <div className='w-[26px] h-[26px] tablet:w-[28px] laptop:w-[36px] laptop:h-[36px]' >
            <Image alt='TwitterIcon' src={twitterIcon} width={36} height={36} />

          </div>
          <div className='w-[26px] h-[26px] tablet:w-[28px] laptop:w-[36px] laptop:h-[36px]'>
            <Image alt='Facebook Icon' src={fbIcon} width={36} height={36} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer