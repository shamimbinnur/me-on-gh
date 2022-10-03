import React from 'react'

const ProfileInfo = () => {
  return (
    <div className='p-4 tablet:p-10'>
        {/* Profile Info cotainer */}
        <div className="bg-bgWhite py-5 px-5 tablet:px-5 rounded-xl">
          <div className="flex flex-col flex-wrap tablet:flex-row gap-6">
            {/* Left portion */}
            <div className="bg-white min-w-0 tablet:min-w-[400px] rounded-xl border-[1px] flex-1 p-5 border-gray-100">
              <div className="flex justify-end">
                <p className="font-bold text-sm text-primary" >PDF</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex justify-center gap-x-4 items-center">
                  <div className="justify-center  flex flex-1 items-center">
                    <div className='w-[150px] h-[150px] rounded-full p-2 bg-gradient-to-r from-primary to-secondary'>
                        <div className="bg-white w-full h-full rounded-full "></div>
                    </div>
                  </div>

                  <div className="border-l-gray-100 flex-1 flex-col py-4 justify-center  border-l-2 px-4 my-8 ">
                    <div className="flex flex-col items-start py-2">
                      <h1 className='text-secondary font-semibold text-3xl'>Olvia</h1>
                      <div className='flex justify-center items-center gap-2 text-gray-400 font-medium text-sm'>
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        <p>Meta inc</p>
                      </div>
                      <div className='flex justify-center items-center gap-2 text-gray-400 font-medium text-sm'>
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        <p>Dhaka</p>
                      </div>
                      <div className='flex justify-center items-center gap-2 text-gray-400 font-medium text-sm'>
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        <p>Olvia.com</p>
                      </div>
                      <div className='flex justify-center items-center gap-2 text-gray-400 font-medium text-sm'>
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        <p>12.3K followers</p>
                      </div>
                    </div>

                    <div className="text-gray-400 font-medium text-sm">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
                <div>
                </div>
              </div>
            </div>

            {/* Right portion */}
            <div className="bg-white min-w-0 tablet:min-w-[400px] rounded-xl gap-x-4 flex p-5 border-[1px] items-center justify-center flex-1 border-gray-100">
              <div className=" flex flex-1 justify-center">
                <div className="bg-cyan-500 w-[160px] h-[160px] p-2 rounded-full ">
                    <div className="bg-white w-full h-full rounded-full "></div>
                </div>


              </div>

              <div className="border-l-2 flex-1 border-l-gray-200 py-4 px-4 ">
                <div>
                  <p className="text-gray-500 font-semibold mb-1  ">Total public repo</p>
                  <div className="w-full p-1 text-center max-w-[200px] bg-cyan-400 rounded-lg bg-opacity-30 ">
                    <p className="text-cyan-600 font-semibold text-lg " >23</p>
                  </div>
                </div>

                <div className="flex flex-col items-start py-2">
                  <div className='flex justify-center items-center gap-2 text-gray-400 font-medium text-sm'>
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <p>Python(12)</p>
                  </div>
                  <div className='flex justify-center items-center gap-2 text-gray-400 font-medium text-sm'>
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <p>JavaScript(44)</p>
                  </div>
                  <div className='flex justify-center items-center gap-2 text-gray-400 font-medium text-sm'>
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <p>Ruby(33)</p>
                  </div>
                  <div className='flex justify-center items-center gap-2 text-gray-400 font-medium text-sm'>
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <p>TypeScript(43)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProfileInfo