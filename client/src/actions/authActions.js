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
    await axios.get('/auth/logout')
}