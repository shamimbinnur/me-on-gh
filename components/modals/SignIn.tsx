import Image from 'next/image'
import React, { FC, useState } from 'react'
import MOG from '../../public/svg/MOGH-logo.svg'
import { useRouter } from 'next/router'

interface Props {
  state: {
    showSignInModal: boolean
    setShowSignInModal: (state: boolean) => void
  }
}

const SignIn:FC <Props> = ({state: {showSignInModal ,setShowSignInModal}}) => {
  const [username, setUsername] = useState("")
  const router = useRouter()

  return (
    <div className={`absolute top-0 left-0 w-full z-10 ${showSignInModal ? "block" : "hidden"}`}>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    
      <div className="relative">
        <div className='w-full h-full flex justify-center mt-[300px]'>
          <div className='border-primaryTwo rounded-[10px] border-[1px] min-w-[350px] bg-white px-[20px] py-[40px]'>
            <div className='flex justify-center'>
              <Image src={MOG} width={80} height={80} alt="MOGH" />
            </div>
            <p className='text-[18px] mt-[20px] font-semibold text-gray-700'>Pleaes enter your github username</p>
            <input onChange={(e)=> setUsername(e.target.value)} type="text" placeholder='ex: shamimbinnur' className='my-1 h-[35px] outline-none border-[2px] text-[14px] text-gray-700 rounded-[6px] px-2 w-full' />

            <div className='mt-[10px] flex gap-2'>
              <button onClick={()=> setShowSignInModal(false)} className='px-4 py-1 rounded-[5px] bg-primaryOne text-white'>Close</button>
              <button onClick={()=> router.push(`/${username}`) } className='px-4 py-1 rounded-[5px] bg-primaryTwo text-white'>Go ahead</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn