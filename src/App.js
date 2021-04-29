import React from 'react'
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import './css/App.css'
import Coupon from './pages/Coupon'
import Generator from './pages/Generator'

const App = ()=>{
  
    return (
      <Router>
        <Switch>
          <Route 
            exact 
            path="/" 
            render={()=> <Generator />} 
          />
          <Route 
            exact 
            path="/Coupon" 
            render={()=> <Coupon />} 
          />
        </Switch>
      </Router>
    )
}

export default App;