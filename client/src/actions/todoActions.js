import axios from "axios";


export const getTodo = async ()=>{
    console.log("waiting to get todos")
    try{
        return await axios.get("/todos")
    }
    catch(e){
        console.log(e.response)
    }
    console.log("got todos")
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

export const deleteTodo = async(todo_id)=>{
    try{
        await axios.get(`/todos/${todo_id}/delete`,{
            id: todo_id
        })
    }
    catch(e){
        console.log(e.response)
    }
}