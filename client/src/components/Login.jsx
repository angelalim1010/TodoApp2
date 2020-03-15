import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { authLogin } from "../actions/authActions";


class Login extends Component{
    constructor(){
        super();
        this.state={
            username: "",
            redirect: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange = async(e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

    handleLogin = async(e) =>{
        e.preventDefault();
        await authLogin(this.state.username)
        this.setState({redirect:true})
    }

    render(){
        console.log("username is:", this.state.username)
        if(this.state.redirect === true){
            return <Redirect to = "/todo"/>
        }
        return(
            <form>
                <label>
                    Login:
                     <input
                        type="username"
                        name="username"
                        onChange={this.handleChange}
                        placeholder="Username"
                        />
                </label>
                <input type="submit" value="Login" onClick={this.handleLogin}/>            
            </form>

        )

    }
}

export default Login;