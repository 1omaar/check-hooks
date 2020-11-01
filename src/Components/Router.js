import React from 'react'
import {  Route, Switch} from 'react-router-dom'
import App from '../App'
import Trailer from './Trailer'
function Router() {
    return (
       
            
                <Switch>
                    <Route exact path = '/' component={App}/>
                    <Route path='/Trailer/:id' component={Trailer}/> 
                </Switch>
           
        
    )
}

export default Router
