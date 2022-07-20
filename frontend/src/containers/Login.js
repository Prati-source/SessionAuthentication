import React, { useState } from 'react';
import   {login} from '../actions/auth' ;
import { connect } from 'react-redux' ;
import { Navigate,Link} from 'react-router-dom';
import CSRFToken from '../components/CSRFToken';
import 'tw-elements';
import {Label, Button, TextInput} from 'flowbite-react';
const Login = ({ login, isAuthenticated }) => {


  const [formdata, setFormdata] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formdata;

  const [accountCreated, setAccountCreated] = useState(false);


  const handleOnChange = (e) => setFormdata({
    ...formdata, [e.target.name]: e.target.value
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();

    
    login(username, password);
    

    
  };


  if (isAuthenticated)
    return <Navigate to='/dashboard' />;
  return (
    <div>
    <div  className=' w-full h-full  bg-blue-800 pt-4  '>
      <div>
        <div className=' flex text-3xl border-white text-white font-sans p-2 my-7 justify-center'>
          LOGIN
        </div>
        <div className='flex text-xl text-white font-sans justify-center'>
          Login to your account

        </div >
       
        <form onSubmit={(e) => handleOnSubmit(e)} >
        <CSRFToken />
        <div className="flex-col grid gap-3 justify-items-start mx-8  ">
          
         <div><label className='text-white w-full h-12 '> Username*:</label></div>
         <div className=''> <input type='text' placeholder='username' name='username' value={username} onChange={(e) => handleOnChange(e)} required /></div>
          <div><label className='text-white w-full '> Password*:</label></div>
          <div><input type='text' placeholder='password' name='password' minLength='6' value={password} onChange={(e) => handleOnChange(e)} required /></div>
         
          <div className="flex space-x-2 justify-center p-1 my-1">
            <button
              type="submit"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              data-mdb-ripple-duration="3s"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >Login</button>
          </div>
          </div>
          </form>
        
      </div>
    </div>
      <div>
          <p>Don't have an account? <div className='underline inline'><Link exact to='/register'>Sign Up </Link></div> </p>
        </div>
    </div>
  );
};  

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, {login})( Login );