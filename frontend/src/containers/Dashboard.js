import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux' ;
import {Link, Navigate} from 'react-router-dom';
import CSRFToken from '../components/CSRFToken';
import { update_user } from '../actions/profile';
import 'tw-elements';


const Dashboard = ({ update_user, firstname_global, lastname_global, city_global, phone_global, isAuthenticated }) => {


  const [formdata, setFormdata] = useState({
    firstname:'',
    lastname:'',
    city:'',
    phone:'',
  });

  const { firstname, lastname, city, phone } = formdata;

  useEffect(
    ()=>{
      setFormdata({
        firstname:firstname_global,
        lastname:lastname_global,
        city:city_global,
        phone:phone_global
      })
    },[]
  );


  const handleOnChange = (e) => setFormdata({
    ...formdata, [e.target.name]: e.target.value
  });

  const handleOnSubmit = (e) => {
    e.preventDefault(); 
    update_user(firstname, lastname, city, phone);
    
  };
  if(!isAuthenticated  ){
    return(
      <Navigate to="/" replace={true} />
    )
  }


  return (
    
    <div>
    <div  className=' w-full h-full  bg-blue-800  '>
      <div>
        <div className=' flex text-3xl border-white text-white font-sans my-7 justify-center'>
         DASHBOARD
        </div>
        <div className='flex text-xl text-white font-sans justify-center'>
          Update your User Profile

        </div >
       
        <form onSubmit={(e) => handleOnSubmit(e)} >
        <CSRFToken />
        <div className="flex-col grid gap-3 justify-items-start mx-8 ">
          
         <div><label className='text-white w-full h-12 '> First Name:</label></div>
         <div className=''> <input type='text' placeholder={firstname_global} name='firstname' value={firstname} onChange={(e) => handleOnChange(e)}  /></div>
          <div><label className='text-white w-full '> Last Name:</label></div>
          <div><input type='text' placeholder={lastname_global} name='lastname'  value={lastname} onChange={(e) => handleOnChange(e)} required /></div>
          <div><label className='text-white w-full h-12 '> Phone Number:</label></div>
         <div className=''> <input type='text' placeholder={phone_global} name='phone' value={phone} onChange={(e) => handleOnChange(e)}  /></div>
         <div><label className='text-white w-full h-12 '> City:</label></div>
         <div className=''> <input type='text' placeholder={city_global}   name='city' value={city} onChange={(e) => handleOnChange(e)}  /></div>
          <div className="flex space-x-2 justify-center p-1 my-1">
            <button
              type="submit"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >Update Profile</button>
          </div>
          </div>
          </form>
        
      </div>
    </div>
    <div className='text-xs mx-4'>
          <p>Don't have an account? <div className='underline inline'><Link exact to='/register'>Sign Up </Link></div> </p>
        </div>
    </div>
  );
};  

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  firstname_global: state.profile.firstname,
  lastname_global: state.profile.lastname ,
  city_global: state.profile.city,
  phone_global: state.profile.phone,
})

export default connect(mapStateToProps, {update_user})( Dashboard );
