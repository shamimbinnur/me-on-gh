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

const Hero:FC<HeroProps> = ({heroData, state: { setShowSignInModal }})=> {
  return (
    <div>
        <div className='max-w-6xl mx-auto flex mobile:flex-col-reverse tablet:flex-row mobile:mt-[50px] tablet:mt-[180px]'>
            <div className='flex-1 px-5'>
               <h1 className='font-bold text-secondary  mobile:text-[40px] tablet:text-[45px] laptop:text-[50px]  desktop:text-[60px] mobile:leading-[45px] laptop:leading-[64px]'>{heroData.title.firstPart} <br /> <span className='text-primaryOne' >{heroData.title.secondPart}</span></h1>

               <p className='leading-[27px] text-grayDimMOGH my-[20px]'>{heroData.subTitle.firstPart}</p>

                <button className=' bg-primaryTwo CTA-button mr-[10px] mb-[10px]'>{heroData.CTA.Contribution.placeholder}</button>
                <button onClick={()=> setShowSignInModal(true)} className='bg-primaryOne CTA-button' >{heroData.CTA.Generate.placeholder}</button>
            </div>

            <div className='flex-1 relative'>
                <div className='absolute top-[-20px] left-0'>
                    <Image alt='Artwork' src={artwork} />
                </div>

                <div className='scale-[.75]' >
                    <Image alt='MOGH hero pgoto' src={heroPhoto} layout='responsive' className='w-full h-full'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero