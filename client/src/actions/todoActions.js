import axios from "axios";


export const getTodo = async ()=>{
    try{
        return await axios.get("/todos")
    }
    catch(e){
        console.log(e.response)
    }
}

export const createNewTodo = async(todo) =>{
    await axios.post("/todos",{
        todo: todo
    })
}

export const updateTodo = async(todo)=>{

}

export const deleteTodo = async(todo)=>{

}