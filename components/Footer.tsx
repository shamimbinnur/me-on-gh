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
      <div className='px-[10px] py-[20px] tablet:py-[50px] flex justify-center  bg-secondary rounded-[10px]'>
        <ul className='flex flex-col tablet:flex-row items-center gap-[10px] tablet:gap-[50px] text-white font-medium text-[14px] tablet:text-[16px] laptop:text-[18px]'>
        {
          footer.map( nav => (
              <li key={nav.placeholder}><a href={nav.link}>{nav.placeholder}</a></li>
          ))
        }
        </ul>
      </div>
      
      <div className='flex px-[100px] py-[40px] justify-between bg-cyanDim'>
        <div>
          <h6 className='tablet:text-[22px] laptop:text-[25px] text-primaryTwo font-medium'>Anything in mind? Create an issue!</h6>
          <p className='tablet:text-[14px] laptop:text-[16px] text-secondary '>Click here.</p>
        </div>

        <div className='flex gap-[10px]'>
          <div className='w-[26px] h-[26px] tablet:w-[28px] laptop:w-[36px] laptop:h-[36px]' >
            <Image alt='GitHub Icon' src={gitHubIcon} width={36} height={36} />
          </div>
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