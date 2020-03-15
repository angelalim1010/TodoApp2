import axios from "axios";

export const authLogin = async(name)=>{
    console.log("hello")
    try{
        await axios.post('/auth/login',{
            username: name
        })
    }
    catch(e){
        console.log(e.response)
    }
    console.log("helllooooooo")
}

export const newSignup = async(name)=>{
    try{
        await axios.post('/users',{
            username: name
        })
    }
    catch(e){
        console.log(e.response)
    }
}

export const authLogout = async()=>{
    try{
        console.log("waiting to logout")
        await axios.delete('/auth/logout')
        console.log("logged out")
    }
    catch(e){
        console.log(e.response)
    }
}