import React, { FC } from 'react'

interface Props {
    languageBasedRepo: {
      lang: string,
      count: Number
    }[]
}

const LBR:FC<Props> = ({languageBasedRepo}) => {
  const filtered = languageBasedRepo.filter( item => item.count > 0)
  const countColors = ["text-red-400","text-green-400","text-blue-400","text-orange-400","text-cyan-400"]

  return (
    <div className='max-w-6x mx-auto font-secondary mb-20 px-5 tablet:px-10 '>
      <div className='flex justify-center max-w-sm mx-auto tablet:max-w-2xl flex-wrap gap-5'>
        {
          filtered.map( ({ count, lang }) => (
            <div key={lang} className='w-[100px] items-center flex justify-center flex-col'>
              <p className={'font-bold leading-tight text-[3rem] tablet:text-[3.5rem] ' + countColors[Math.ceil(Math.random() * 4)] }>{count as number}</p>
              <p className="font-semibold text-[rem] text-gray-600 tablet:text-[1rem]">{lang}</p>
            </div>
          ))
        }
      </div>
      <div className='text-center font-thin text-[2rem] leading-10 tablet:leading-[3.8rem] max-w-[20rem] tablet:max-w-[40rem] mx-auto tablet:text-[3.1rem] mt-[22px]'>
        <p>
            <span className='text-blue-400'>Repositories </span> 
            <span className='text-cyan-400'>with </span>
            <span className=' text-amber-500'>different </span>
            <span className=' text-green-400 '>language </span>   
        </p>
      </div>
    </div>
  )
}

export default LBR