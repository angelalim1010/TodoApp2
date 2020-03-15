import React, { Component } from "react";
import Login from './Login'
import { Link } from "react-router-dom";

class Homepage extends Component{
    render(){
        return(
            <div>
                <h1>Please login</h1>

                <Login/>
                <p>Sign up here <Link to = "/signup">Signup</Link></p>
            </div>
           
        )
    }
}

export default Homepage;