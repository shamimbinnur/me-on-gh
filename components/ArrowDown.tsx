import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { BiDownArrow } from 'react-icons/bi'

const ArrowDown: FC = () => {
  return (
    <div className="flex justify-center content-center items-center h-28">
        <motion.div
        transition={{
            duration: 1.5,
            yoyo: Infinity,
            stiffness: 500
        }}
        animate={{
            translateY: [0, 20, 0],
          }}
        
        className="text-primary">
            <BiDownArrow />
        </motion.div>
    </div>
  )
}

export default ArrowDown