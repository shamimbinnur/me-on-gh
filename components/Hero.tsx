import Image from 'next/image'
import React, { FC } from 'react'
import artwork from '../public/svg/artwork.svg'
import heroPhoto from '../public/svg/hero-photo.svg'

interface HeroProps{
    state: {
        setShowSignInModal: (state: boolean) => void,
    },
    heroData: {
        title:{
            firstPart: string,
            secondPart: string
        },
        subTitle:{
            firstPart: ""
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
    <div>
        
    </div>
  )
}

export default Hero