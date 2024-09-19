
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
const Update = () => {
  
  return (
    
    <div className=' h-[100vh] w-[100vw] bg-gray-500 flex justify-center items-center'>
        <div className=' h-[80%] w-[80%] pt-[50px] pl-[50px] bg-white '>
            <div className=' flex w-full  pr-[50px]  '>
                <div className=' w-1/2 text-[2rem] text-black font-bold '>
                  Khatabook
                </div>
                <div className=' w-1/2 flex pl-[300px] gap-10 text-[1.2rem] font-semibold'>
                  <Link to={"/"}>Home</Link>
                </div>
            </div>
            <div className=' flex justify-center items-center h-full'>
            <form className=' w-[50%] h-[80%] p-[40px] items-center  flex flex-col flex-wrap bg-gray-400 '>

<input type='text ' oclassName=' h-[80%] w-full '></input>
<button type='submit' className=' mt-[10px] bg-red-600 px-1 py-2 w-[150px]'>Update Hisab</button>
</form>
            </div>
        </div>
        </div>
  )
}

export default Update
