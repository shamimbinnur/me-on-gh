import Image from 'next/image'
import React, { FC } from 'react'
import artwork from '../public/svg/artwork.svg'
import heroPhoto from '../public/svg/hero-photo.svg'

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
    <div className="flex justify-between mt-16">
        <div className="flex justify-between w-full">
            <div className="max-w-md">
                <h1 className="font-semibold text-5xl leading-tight text-secondary mb-6">{heroData.title.firstPart} <span className="text-primary">{heroData.title.secondPart}</span></h1>

                <p className="text-lg text-secondary">{heroData.subTitle.firstPart}</p>

            </div>
            <div className="relative px-16">
                <div className="max-w-md">
                    <Image src={heroPhoto} />
                </div>

            </div>
        </div>

        <div className="w-1 bg-gradient-to-b leading-tight tracking-wide rounded-tl-md rounded-bl-md from-primary to-secondary">

        </div>

        
    </div>
  )
}

export default Hero