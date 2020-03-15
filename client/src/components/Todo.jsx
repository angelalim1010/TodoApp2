import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { getTodo, createNewTodo, updateTodo, deleteTodo } from "../actions/todoActions";
import {authLogout} from "../actions/authActions";

class Todo extends Component{
    constructor(props){
        super(props);
        this.state={
            username: this.props.username,
            todosArray: [],
            content: ""
        };
        this.renderTodos = this.renderTodos.bind(this);
        this.renderLogout = this.renderLogout.bind(this);
        this.handleNewTodo = this.handleNewTodo.bind(this);
        this.refreshPage = this.refreshPage.bind(this);
    }
    async componentDidMount(){
        let todos = await getTodo() || [];
        this.setState({
            todosArray: todos.data
        })
    }
    renderTodos = () =>{
        const data = this.state.todosArray;
        if(data.length > 0){
            const todoList = data.map((todo)=>(
                <div>
                    <div key={todo.id}>
                        <li key={todo.content}>
                        Todo: {todo.content}
                        <ul>
                        <li key={todo.completed}>
                            completed : {todo.completed.toString()}
                        </li>
                        <li>
                            deleted : {todo.deleted.toString()}
                        </li>
                        </ul>
                    </li>
                    </div>
                <div>
                    <form>
                        <input type="submit" value="Delete Todo" onClick={()=>deleteTodo(todo.id)}/>
                    </form>
                    </div>
                
            </div>
              
                ))
            return todoList;
        }
      else{
          return;
      }
    }

    renderLogout = async ()=>{
        await authLogout()
    }

    refreshPage(){
        window.location.reload();
    }

    handleChange = async(e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

    handleNewTodo = async(e)=>{
        e.preventDefault();
        await createNewTodo(this.state.content)
        this.refreshPage()    
    }

    render(){
        console.log("todos are:", this.state.todosArray)
        console.log("username in state is:", this.state.username)
        console.log("new todo is: ", this.state.content)
        return(
            <div>
                <div>
                    <Link to ="/">Return to home</Link>
                    <h1>{this.state.username}</h1>
                    <ul>{this.renderTodos()}</ul>
                    <Link to = "/" onClick={()=>this.renderLogout()}>Logout</Link>
                </div>
                <div>
                    <form>
                    <label>
                        Enter todo:
                        <input
                            type="content"
                            name="content"
                            onChange={this.handleChange}
                            placeholder="Enter todo"
                            />
                    </label>
                    <input type="submit" value="Submit" onClick={this.handleNewTodo}/>            
                    </form>
                </div>
            </div>
           
        )
    }
}

export default Todo;