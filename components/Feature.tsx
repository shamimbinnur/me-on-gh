import Image from 'next/image'
import React, { FC } from 'react'

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
        <div className='max-w-6xl flex mx-auto py-[80px]'>
            {
                features.map( (feature, index) => (
                <div className='flex flex-1 items-center'>
                    <Image className='' width={130} height={130} src={feature.previewImage}/>
                    
                    <div>
                        <h2 className='text-[18px] text-grayMOGH font-medium'>{feature.title}</h2>
                        <p className='text-[12px] text-grayMOGH'>{feature.subTitle}</p>
                    </div>
                    
                    { index != features.length-1 && <div className=' bg-greenMOGH mx-[15px] h-[60px] w-[2px] rounded-md '></div>}
                </div>
                

                ))
            }
        </div>
  )
}

export default Feature