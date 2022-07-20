import React from 'react'
import { Link } from 'react-router-dom'
import 'tw-elements';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';


 const Home = ({isAuthenticated}) => {
if(isAuthenticated){
  return(
    <Navigate to='/dashboard' />
  )
}
  
  return (
    <div>
      
      <div className=' w-full h-64 bg-blue-800 p-1  '>
        <div className=' flex text-3xl text-white font-sans my-8 justify-center '>
          Authentication Application 
        </div>
        <div className='flex text-xl text-white font-sans justify-center'>
          Simple and easy authentication application with csrf token

        </div>
        <div className="flex justify-center my-4 space-x-2">
            <Link to="/login"
                      className="  inline-block mx-12 px-6 py-2.5 bg-white text-blue-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:text-blue-400 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >Login</Link>
        </div>

      </div>
      <div id="carouselExampleCaptions" className="carousel slide  relative" data-bs-ride="carousel">
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 ">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
          <div className="carousel-inner  relative w-full overflow-hidden ">
            <div className="carousel-item active relative float-left w-full  ">
              <div className="relative overflow-hidden bg-no-repeat bg-cover  " >
                <img src="./slide1.jpg" alt='slide1' className="block w-full " />
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50"></div>
              </div>
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl">First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <img src="./slide2.jpg" alt='slide2' className="block w-full" />
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50"></div>
              </div>
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl">Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <div className="relative overflow-hidden bg-no-repeat bg-cover" >
                <img src="./slide3.jpg" alt='slide3' className="block w-full" />
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50"></div>
              </div>
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl">Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>



       

    </div>  
      
          


    
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,

})
export default connect( mapStateToProps,)( Home);