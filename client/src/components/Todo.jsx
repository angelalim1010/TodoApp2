import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { getTodo, createNewTodo, updateTodo, deleteTodo } from "../actions/todoActions";
import {authLogout} from "../actions/authActions";

class Todo extends Component{
    _isMounted = false;
    constructor(props){
        super(props);
        this.state={
            username: this.props.username,
            todosArray: [],
            content: "",
            value: true
        };
        this.renderTodos = this.renderTodos.bind(this);
        this.renderLogout = this.renderLogout.bind(this);
        this.handleNewTodo = this.handleNewTodo.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.refreshPage = this.refreshPage.bind(this)
    }
    async componentWillMount(){
        this._isMounted = true;
        let todos = await getTodo() || [];
        this.setState({
            todosArray: todos.data
        })
    }
    renderLogout = async ()=>{
        await authLogout()
    }

    refreshPage(){
        window.location.reload();
    }

    handleChange = async(e) => {
        e.preventDefault();
        this.setState({
          [e.target.name]: e.target.value
        });
      };
    handleValueChange = async(e)=>{
        e.preventDefault();
        this.setState({
            value: e.target.value
        })
    }
    handleNewTodo = async(e)=>{
        e.preventDefault();
        await createNewTodo(this.state.content)
        this.refreshPage()    
    }


    renderTodos = () =>{
        const data = this.state.todosArray;
            const todoList = data.map((todo)=>(
                    <div key={todo.id}>
                        <li key={todo.content}>
                        Todo: {todo.content}
                        <ul>
                        <li>
                            id: {todo.id}
                        </li>
                        <li key={todo.completed}>
                            completed : {todo.completed.toString()}
                        </li>
                        <li>
                            deleted : {todo.deleted.toString()}
                        </li>
                        </ul>
                        </li>
                <div>
                    <p>Select the completion status of the todo</p>
                    <form onSubmit={()=>updateTodo(todo.id, this.state.value)}>
                            <select  onChange={this.handleValueChange}>
                                <option value="Done">Done</option>
						        <option value="Not Done">Not Done</option>
                            </select>
                        <button type="submit" >Change Status</button>
                    </form>
                </div>
		        <br/>
                <div>
                    <form onSubmit={()=>deleteTodo(todo.id)}>
                        <input type="submit" value="Delete Todo" />
                    </form>
                    </div>
                
            </div>
              
                ))
            return todoList;
       
    }

    

    render(){
        console.log("todos are:", this.state.todosArray)
        console.log("username in state is:", this.state.username)
        console.log("new todo is: ", this.state.content)
        console.log("completed:", this.state.value)
        return(
            <div>
                <div>
                    <Link to ="/">Return to home</Link>
                    <br></br>
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
                <div>
                    <ul>{this.renderTodos()}</ul>
                </div>
            </div>
           
        )
    }
}

export default Todo;