import Image from 'next/image'
import React, { FC } from 'react'
import radial from '../public/svg/background/radial.svg'
import _1_rStroke from '../public/svg/background/_1_rStroke.svg'
import _1_rText from '../public/svg/background/_1_rText.svg'
import _2_lText from '../public/svg/background/_2_lText.svg'
import _2_rText from '../public/svg/background/_2_rText.svg'

interface Props {
    children: React.ReactNode,
}
export const Background_Home:FC<Props> = ({children}) => {
  return (
    <div className="relative h-fit overflow-hidden">
        <div className="absolute -top-[30rem] -right-[15rem]">
            <Image alt="Stroke" src={radial} />
        </div>
        <div className="absolute -top-[4rem] -right-[5rem]">
            <Image alt="Stroke" src={_1_rStroke} />
        </div>
        <div className="absolute top-[5rem] -right-[10rem]">
            <Image alt="Stroke" src={_1_rText} />
        </div>
        <div className="absolute top-[50rem] -left-[15rem]">
            <Image alt="Stroke" src={_2_lText} />
        </div>
        <div className="absolute top-[50rem] -right-10">
            <Image alt="Stroke" src={_2_rText} />
        </div>

        <div className="relative">
            {children}
        </div>
    </div>
  )
}
