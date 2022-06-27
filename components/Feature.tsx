import Image from 'next/image'
import React, { FC } from 'react'
import pdfIcon from '../public/svg/pdfIcon.svg'
import linkIcon from '../public/svg/linkIcon.svg'
import osIcon from '../public/svg/osIcon.svg'

type HeroProps = {}

const Feature:FC<HeroProps> = ({})=> {
  return (
    <div>
        <div className='max-w-6xl flex mx-auto'>
            <div>
                <Image src={pdfIcon}/>
                <h2>Awesome titlex</h2>

            </div>
        </div>
        
    </div>
  )
}

export default Feature