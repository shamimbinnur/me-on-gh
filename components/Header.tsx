import Image from 'next/image'
import React, { FC } from 'react'
import MOG from '../public/svg/MOG-logo.svg'
import MOG_text from '../public/svg/MOG-text.svg'
import deco from '../public/svg/deco.svg'
import Link from 'next/link'

interface HeaderProps{
    navs: []
}

const Header:FC<HeaderProps> = ({navs}) => {
  return (
    <div className='relative max-w-2xl mx-auto'>
        <div className='absolute top-[-760px] left-[-440px] scale-[1] ' >
           <Image src={deco}/>
        </div>
        
        <div className='flex items-center justify-between  '>
            <div className='flex gap-[15px] items-center '>
                <Image src={MOG} width={60} height={60} />
                <Image src={MOG_text} width={160} height={60} />

            </div>

            <div>
                <ul className='flex text-[15px] gap-[20px] tracking-tight text-grayMOG'>
                    {
                        navs.map( nav => (
                            <li> <Link href={nav.link}><a>{nav.placeholder}</a></Link> </li>
                        ))
                    }
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Header