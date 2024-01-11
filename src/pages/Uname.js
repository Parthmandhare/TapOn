import React from 'react'

function Uname() {
  return (
    <>
    
    <div className="container mx-auto px-4 h-full  ">
        <div className="flex content-center items-center justify-center h-full ">
          
    <div>
      <h1 className=' font-bold text-6xl mb-4 text-white'>Welcome to TapON !!</h1>
      <p className='text-2xl mb-5 text-white ml-32'>Choose your TapON Username</p>
      <input
                      type="username"
                      className="border-0 px-3 py-3 placeholder-zinc-800 text-zinc-900 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="tapin/Username"
                    />
      </div>
   
    </div>
    </div>
    
    </>
  )
}

export default Uname