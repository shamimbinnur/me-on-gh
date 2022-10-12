import Image from 'next/image'
import React, { FC } from 'react'
import MOG from '../public/svg/MOGH-logo.svg'
import MOG_text from '../public/svg/MOG-text.svg'
import deco from '../public/svg/deco.svg'
import Link from 'next/link'

interface HeaderProps{
    navs: [
        {
            placeholder: string
            link: string
        }
    ]
}

const Header:FC<HeaderProps> = ({navs}) => {
  return (
    <div className='relative mx-auto'>        
        <div className='flex items-center justify-between  '>
            <div className='flex gapx-x-2 items-center'>
                <div className='flex justify-center w-[50px] h-[50px] tablet:w-[60px] tablet:h-[60px]'>
                    <Image src={MOG} width={50} height={50} alt="MOG Logo" />
                </div>
                <div className='flex justify-center w-[110px] h-[110px] tablet:w-[160px] tablet:h-[160px]'>
                    <Image src={MOG_text} width={150} height={50} alt="MOG Logo" />
                </div>
            </div>

            <div>
                <ul className='tablet:flex hidden text-[15px] font-semibold gap-[20px] tracking-tight text-secondary'>
                    {
                        navs.map( nav => (
                            <li key={nav.link}> <Link href={nav.link}><a>{nav.placeholder}</a></Link> </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header