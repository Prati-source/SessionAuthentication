import React from 'react'
import { Link } from 'react-router-dom'

 const Home = () => {
  return (
    <div>
      <div className=' w-full h-64 bg-blue-800 -my-2 '>
        <div className=' flex text-3xl text-white font-sans my-6 justify-center'>
          Authentication Application 
        </div>
        <div className='flex text-xl text-white font-sans justify-center'>
          Simple and easy authentication application with csrf token

        </div>
        <div class="flex justify-center my-4 space-x-2">
            <Link to="/login"
                      className="  inline-block mx-12 px-6 py-2.5 bg-white text-blue-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:text-blue-400 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >Login</Link>
        </div>

      </div>
    </div>
  )
}


export default Home;