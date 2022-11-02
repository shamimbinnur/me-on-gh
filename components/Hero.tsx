import Image from 'next/image'
import React, { FC } from 'react'
import artwork from '../public/svg/artwork.svg'
import heroPhoto from '../public/svg/hero-photo.png'

interface HeroProps{
    heroData: {
        title:{
            firstPart: string,
            secondPart: string
        },
        subTitle:{
            firstPart: string
        },
        CTA:{
            Generate: {
                placeholder: string,
                link: string
            },
            Contribution: {
                placeholder: string,
                link: string
            }
        }
    }
}

const Hero:FC<HeroProps> = ({heroData})=> {
  return (
    <div className="flex justify-between mt-8 laptop:mt-16">
        <div className="flex flex-col-reverse px-6 laptop:flex-row gap-y-14 justify-between w-full">
            <div className="max-w-md">
                <h1 className="font-semibold text-5xl leading-tight text-secondary mb-6">{heroData.title.firstPart} <span className="text-primary">{heroData.title.secondPart}</span></h1>

                <p className="text-lg tracking-normal text-secondary">{heroData.subTitle.firstPart}</p>

            </div>
            <div className="relative flex bg-blacks items-center justify-center transition-all desktop:px-16">
                <div className="max-w-md">
                    <Image alt="MOGH" priority src={heroPhoto} />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero