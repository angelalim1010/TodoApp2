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
    try{
        console.log("waiting to create new todo")
        await axios.post("/todos/create",{
            content: todo
        })
        console.log("created new todo")
    }
    catch(e){
        console.log(e.response)
    }
  
}

export const updateTodo = async(todo)=>{

}

export const deleteTodo = async(todo)=>{

}