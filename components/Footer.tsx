import Image from 'next/image'
import React from 'react'
import fbIcon from '../public/svg/social/facebook.svg'
import twitterIcon from '../public/svg/social/twitter.svg'
import gitHubIcon from '../public/svg/social/github.svg'

const navs = [1,1,1,1]

function Footer() {
  return (
    <div className='mx-auto bg-skyMOGH rounded-[10px] '>
      <div className='px-[10px] py-[50px] flex justify-center  bg-grayDarkMOGH rounded-[10px]'>
        <ul className='flex gap-[10px] text-white font-medium text-[18px]'>
        {
          navs.map( nav => (
              <li><a href="#">Doc</a></li>
          ))
        }
        </ul>
      </div>
      
      <div className='flex px-[100px] py-[40px] justify-between bg-skyMOGH'>
        <div>
          <h6 className='text-[25px] text-grayDarkMOGH font-medium'>Any Question?</h6>
          <p className='text-[16px] text-grayDimMOGH '>mog@gmail.com</p>
        </div>

        <div className='flex gap-[10px]'>
          <Image src={gitHubIcon} width={36} height={36} />
          <Image src={twitterIcon} width={36} height={36} />
          <Image src={fbIcon} width={36} height={36} />
        </div>

      </div>

    </div>
  )
}

export default Footer