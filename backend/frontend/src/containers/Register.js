import React, { useState } from 'react';
import   {register} from '../actions/auth' ;
import { connect } from 'react-redux' ;
import { Navigate } from 'react-router-dom';
import CSRFToken from '../components/CSRFToken';

const Register = ({ register }) => {


  const [formdata, setFormdata] = useState({
    username: '',
    password: '',
    re_password: ''
  });

  const { username, password, re_password } = formdata;

  const [accountCreated, setAccountCreated] = useState(false);


  const handleOnChange = (e) => setFormdata({
    ...formdata, [e.target.name]: e.target.value
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password === re_password) {
      register(username, password, re_password);
      setAccountCreated(true);

    }
  };


  if (accountCreated)
    return <Navigate to='/' />;
  return (
    <div  className=' w-3/4 h-full  bg-blue-800 rounded-lg m-2'>
      <div>
        <div className=' flex text-3xl border-white text-white font-sans my-6 justify-center'>
          REGISTER
        </div>
        <div className='flex text-xl text-white font-sans justify-center'>
          Simple and easy Registration application with csrf token

        </div >
       
        <form onSubmit={(e) => handleOnSubmit(e)} >
        <CSRFToken />
        <div className="flex-col grid gap-3 justify-items-start mx-8 ">
          
         <div><label className='text-white w-full h-12 '> Username*:</label></div>
         <div className=''> <input type='text' placeholder='username' name='username' value={username} onChange={(e) => handleOnChange(e)} required /></div>
          <div><label className='text-white w-full '> Password*:</label></div>
          <div><input type='text' placeholder='password' name='password' minLength='6' value={password} onChange={(e) => handleOnChange(e)} required /></div>
          <div><label className='text-white w-full'> Confirm password*:</label></div>
          <div><input type='text' placeholder='Confirm password' name='re_password' minLength='6' alue={re_password} onChange={(e) => handleOnChange(e)} required /></div>
          <div className="flex space-x-2 justify-center p-1 my-1">
            <button
              type="submit"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >Register</button>
          </div>
          </div>
          </form>
        
      </div>
    </div>
  );
}  


export default connect(null, {register} )(Register) ; 