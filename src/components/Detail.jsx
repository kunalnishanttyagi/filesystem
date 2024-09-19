import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const Detail = () => {
  
  return (
    
    <div>
      <div className=' h-[100vh] w-[100vw] bg-gray-500 flex justify-center items-center'>
          <div className=' h-[80%] w-[80%] bg-white'>
              <div className=' flex w-full  pt-[50px] pl-[50px] pr-[50px]  '>
                  <div className=' w-1/2 text-[2rem] text-black font-bold '>
                    Khatabook
                  </div>
                  <div className=' w-1/2 flex pl-[300px] gap-10 text-[1.2rem] font-semibold'>
                    <Link to={"/"}>Home</Link>
                    <Link to={`/update`} >Update</Link>
                  </div>
              </div>
              <div className='flex justify-center items-center'>
              <div className='  h-[400px] w-[500px] text-black bg-gray-400 p-[30px]'>
                <div>Here is hisab of </div>
                <br />
                <br />
                <div> </div>
              </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Detail
