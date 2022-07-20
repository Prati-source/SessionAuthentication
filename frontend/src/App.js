import React from 'react'
import  Layout  from './hocs/Layout'
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import  Home  from './containers/Home';
import Register  from './containers/Register';
import  Login  from './containers/Login';
import  Dashboard  from './containers/Dashboard';




 const App = () =>  {
 
  return ( 
    <Router>
      <Layout>
     
          <Routes>
                    <Route   path="/"element={<Home />}  />
                    <Route    path="/register"element={<Register />} />
                    <Route     path="/login"element={<Login />} />
                    <Route    path="/Dashboard" element={<Dashboard /> } />
          </Routes>
            
    </Layout>
    </Router>
    
  )
}



export default  App