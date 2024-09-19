import React, { useContext } from 'react'
import Entry from './Entry'
import { Link } from 'react-router-dom'

const Home = () => {
  
  // console.log(fulldata[0].date)
  return (
    <div className=' h-[100vh] w-[100vw] bg-gray-500 flex justify-center items-center'>
        <div className=' h-[80%] w-[80%] bg-white'>
            <div className=' flex w-full h-[15%] pt-[50px] pl-[50px] pr-[50px]  '>
                <div className=' w-1/2 text-[2rem] text-black font-bold '>
                  Khatabook
                </div>
                <div className=' w-1/2 flex pl-[300px] gap-10 text-[1.2rem] font-semibold'>
                  <Link to={"/"} >Home</Link>
                  <Link to={"/create"} >Create</Link>
                </div>
            </div>
            <div className=' w-full  flex flex-col flex-wrap h-[85%] p-[40px]'>
              
                <div className=' mr-[20px] mb-[20px] bg-blue-500 px-[10px] py-[20px] w-[300px] h-auto  flex justify-around'>
              <div className=' flex gap-5 '>
                  <div> date </div>
                <Link to={"/detail"}>arrow</Link>
              </div>
      
              <div className=' flex gap-5'>
                  <Link to={"/update"}> edit</Link>
                  <button >delete</button>
              </div>
          </div>
              
                
                

            </div>
        </div>
    </div>
  )
}

export default Home
