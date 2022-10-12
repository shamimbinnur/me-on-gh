import { useRouter } from 'next/router'
import React, { FC, useState } from 'react'
import { motion } from 'framer-motion'

const CTA:FC = () => {
  const [username, setUsername] = useState("")
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setLoading(true)
    router.push(`/${username}`)
  }
  return (
    
    <div className="flex flex-col justify-center items-center h-[10vh] laptop:h-[30vh]">
        <div className="py-10">
          {
            loading && 
            <div className="flex items-center gap-x-2 justify-center">
              <motion.div
              transition={{
                duration: 0.8,
                yoyo: Infinity
              }}
              animate={{
                translateY: [0,5,0]
              }}
              className="w-2 h-2 rounded-full bg-primary">
              </motion.div>

              <motion.div
              transition={{
                duration: 0.9,
                yoyo: Infinity
              }}
              animate={{
                translateY: [0,5,0]
              }}
              className="w-2 h-2 rounded-full bg-primary">
              </motion.div>

              <motion.div
              transition={{
                duration: 1,
                yoyo: Infinity
              }}
              animate={{
                translateY: [0,5,0]
              }}
              className="w-2 h-2 rounded-full bg-primary">
              </motion.div>
            </div>
          }
        </div>
        <div className="flex gap-y-2 flex-col">
            <p className="text-sm font-semibold text-gray-500">GitHub username</p>
            <div >
                <form className="flex gap-4 justify-center" onSubmit={handleSubmit} >
                  <input onChange={(e) => setUsername(e.target.value)} placeholder="ex. blackgirlbytes" className="border-[2px] ring-1 ring-gray-200 border-gray-100 transition-all hover:scale-105 hover:ring-primary text-sm px-2 outline-none text-gray-500 rounded-xl" type="text" />
                  <button onClick={handleSubmit} className="border-2 border-primary font-bold text-primary text-lg transition-all hover:bg-primary hover:scale-110 hover:text-white px-3 py-0.5 rounded-full">GET IT</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CTA