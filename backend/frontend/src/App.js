import React from 'react'
import { Layout } from './hocs/Layout'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import  Home  from './containers/Home'
import Register  from './containers/Register'
import { Login } from './containers/Login'
import { Dashboard } from './containers/Dashboard'




 const App = () =>  {
  return ( 
    <Router>
      <Layout>
     
    <Routes>
    <Route  exact="true" path="/" element={<Home />} />
    <Route  exact="true"  path="/register" element={<Register />} />
    <Route  exact="true"   path="/login" element={< Login />} />
    <Route  exact="true"  path="/Dashboard" element={<Dashboard />} />
    
    </Routes>
    </Layout>
    </Router>
    
  )
}


export default App;