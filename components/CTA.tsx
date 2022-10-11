import React, { FC } from 'react'

const CTA:FC = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh]">
        <div className="flex gap-y-2 flex-col">
            <p className="text-sm font-semibold text-gray-500">GitHub username</p>
            <div className="flex gap-4 justify-center">
                <input placeholder="ex. bdougie" className="border-[2px] ring-1 ring-gray-200 border-gray-100 transition-all hover:ring-primary text-sm px-2 outline-none text-gray-500 rounded-xl" type="text" />
                <button className="border-2 border-primary font-bold text-primary text-lg transition-all hover:bg-primary hover:text-white px-3 py-0.5 rounded-full">GET IT</button>

            </div>

        </div>

    </div>
  )
}

export default CTA