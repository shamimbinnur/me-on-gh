import Image from 'next/image'
import React, { FC } from 'react'
import pdfIcon from '../public/svg/pdfIcon.svg'
import linkIcon from '../public/svg/linkIcon.svg'
import osIcon from '../public/svg/osIcon.svg'

interface FeatureProps{
    features: [
        {
            title: string
            subTitle: string
            previewImage: string
        }
    ]  
}

const Feature:FC<FeatureProps> = ({features})=> {
  return (
    <div>
        <div className='max-w-6xl flex mx-auto'>
            {
                features.map( (feature, index) => (
                <div className='flex gap-[5px] flex-1 items-center'>
                    <Image className='' width={130} height={130} src={feature.previewImage}/>
                    
                    <div>
                        <h2 className='text-[20px] text-grayMOGH font-medium'>{feature.title}</h2>
                        <p className='text-[13px] text-grayMOGH'>{feature.subTitle}</p>
                    </div>
                </div>

                ))
            }

        </div>
        
    </div>
  )
}

export default Feature