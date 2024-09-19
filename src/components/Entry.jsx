import React from 'react'
import { Link } from 'react-router-dom'

const Entry = () => {
  return (
    <div className=' bg-blue-500 px-[10px] py-[20px] w-[300px] h-auto flex justify-around'>
        <div className=' flex gap-5 '>
            <div> 31-07-24</div>
            <Link to={"/detail"}>arrow</Link>
        </div>

        <div className=' flex gap-5'>
            <div> edit</div>
            <button>delete</button>
        </div>
    </div>
  )
}

export default Entry
