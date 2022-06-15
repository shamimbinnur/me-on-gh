import Image from 'next/image'
import React, { FC } from 'react'
import artwork from '../public/svg/artwork.svg'
import heroPhoto from '../public/svg/hero-photo.svg'

type HeroProps = {}

const Hero:FC<HeroProps> = ({})=> {
  return (
    <div>
        <div className=' max-w-6xl mx-auto flex mt-[180px]'>
            <div className='flex-1'>
               <h1 className='font-bold text-grayMOGH text-[60px] leading-[64px] '>Share your GitHub profile <br /> <span className='text-greenMOGH' >as resume!</span></h1>

               <p className='leading-[27px] text-grayDimMOGH my-[20px] '>Working in a company does not reveal a candidate's history or ability to write high-quality code. However, the developer's GitHub profile can serve as a barometer of his or her good or bad habits.</p>

                <button className='bg-greenMOGH CTA-button mr-[10px] ' >Generate Now</button>
                <button className=' bg-blueMOGH CTA-button '>Contribute</button>
            </div>

            <div className='flex-1 relative'>
                <div className='absolute top-[-20px] left-0'>
                    <Image src={artwork} />
                </div>

                <div className='scale-[.75] ' >
                    <Image src={heroPhoto} layout='responsive' className='w-full h-full '/>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Hero