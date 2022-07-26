import React, { Fragment,useEffect   } from 'react'
import  Navibar  from '../components/Navibar';
import { connect } from 'react-redux';
import { checkAuthenticated } from '../actions/auth';
import { load_user } from '../actions/profile';


 const Layout = ({ children, checkAuthenticated, load_user }) => {
  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, [])
  return (
    <Fragment>
      <Navibar />
      { children }
    </Fragment>
  )
};  

export default connect(null, { checkAuthenticated, load_user })(Layout);
