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
        <div className='max-w-6xl flex flex-col mobile:gap-[0px] tablet:gap-[30px] laptop:gap-[0px] tablet:flex-row mx-auto py-[80px]'>
            {
                features.map( (feature, index) => (
                <div key={feature.title} className='flex flex-col laptop:flex-row flex-1 gap-y-[25px] tablet:gap-y-[10px] items-center'>
                    <div className=' w-[220px]  h-[220px] tablet:w-[130px] tablet:h-[130px] flex justify-center'>
                        <Image alt='previe image' className='w-full h-ful' width={1000} height={1000} src={feature.previewImage}/>
                    </div>
                    
                    <div className='flex flex-col max-w-[300px] tablet:max-w-full justify-center items-center tablet:items-start'>
                        <h2 className='text-[20px] text-center tablet:text-left tablet:text-[18px] text-grayMOGH font-medium'>{feature.title}</h2>
                        <p className=' text-[14px] text-center tablet:text-left tablet:text-[12px] text-grayMOGH'>{feature.subTitle}</p>
                    </div>
                    
                    { index != features.length-1 && <div className=' bg-greenMOGH hidden laptop:block mx-[15px] h-[60px] w-[2px] rounded-md '></div>}
                </div>
                

                ))
            }
        </div>
  )
}

export default Feature