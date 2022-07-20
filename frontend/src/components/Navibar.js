import React, { Fragment } from 'react';

import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import CSRFToken from './CSRFToken';
import 'tw-elements';
import 'flowbite';
import { Navbar } from 'flowbite-react'; 





 const Navibar = ({ isAuthenticated, logout})=> {


  const king = 'ming';




if(isAuthenticated)
 return (
     <div>
         
         <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="/">
    <img
      src="./favicon.ico"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Session Auth
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/"
      className=''
    
    >
     <div className='hover:underline font-bold  '>Home</div>
      
    </Navbar.Link>
    <Navbar.Link href='/dashboard' >
    <div className='hover:underline font-bold  '>
        
          Dashboard
      </div>  
      </Navbar.Link>
      
        <Navbar.Link onClick={logout}>
        <div className='hover:underline font-bold  '>
        
          Logout
       </div>
      </Navbar.Link>
    

  </Navbar.Collapse>
</Navbar>


    </div>
 )
 else
 return(
  <div>
         
  <Navbar
fluid={true}
rounded={true}
>
<Navbar.Brand href="/">
<img
src="./favicon.ico"
className="mr-3 h-6 sm:h-9"
alt="Flowbite Logo"
/>
<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
Session Auth
</span>
</Navbar.Brand>

<Navbar.Toggle />
<Navbar.Collapse>
<Navbar.Link
href="/"


>
<div className='hover:underline font-bold  '>Home</div>

</Navbar.Link>
<Navbar.Link href='/register' >

<div className='hover:underline font-bold  '>
  Register
</div> 
</Navbar.Link>

 <Navbar.Link href='/login' >
 <div className='hover:underline font-bold  '>
   Login
 </div>
</Navbar.Link>


</Navbar.Collapse>

</Navbar>


</div>
 )
}

const mapStateToProps = state =>({
  isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps, { logout })(Navibar);




