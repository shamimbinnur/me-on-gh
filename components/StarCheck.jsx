import Image from 'next/image'
import React from 'react'
import meonRepo from '../public/meonRepo.png'
import HeaderForProfile from './HeaderForProfile'
import Router from 'next/router'

const StarCheck = () => {

  const pageReload = ()=> {
    Router.reload()
  }
  return (
    <div>
      <HeaderForProfile/>

      <div className='font-primary mt-10 px-4'>
        <div className='max-w-2xl mx-auto font-primary'>
          <h1 className=" text-[3rem] tablet:text-[3.5rem] text-center leading-[107%] font-semibold text-blue-500"><span className=' text-teal-400'>Seems</span> like you havn’t  starred the repo yet!  </h1>
        </div>

        <div className='mx-auto mt-10'>
          <p className='text-[2rem] tablet:text-[2.5rem] text-gray-600 text-center '>It’s pretty simple, you know!</p>
          <p className='text-[1.2rem] text-center mt-3 text-gray-600'>Click <a className='text-blue-400 font-semibold ' href="#">here</a> to visit the repository</p>
        </div>

        <div className='flex justify-center mt-10 w-full'>
          <div className='max-w-[800px] h-auto'>
            <Image src={meonRepo} alt="ME ON GH" />
          </div>
        </div>

        <div className='flex justify-center flex-col items-center gap-y-5 mt-20'>
          <p className='text-[1.2rem] text-gray-600'>Have you starred the repository?</p>
          <button onClick={pageReload} className='bg-green-600 text-white leading-10 text-[2rem] py-1 px-3 rounded-lg'>
            Yep
          </button>
        </div>

      </div>
    </div>
  )
}

export default StarCheck