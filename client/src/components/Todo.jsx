import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { getTodo } from "../actions/todoActions";
import {authLogout} from "../actions/authActions";

class Todo extends Component{
    constructor(props){
        super(props);
        this.state={
            username: this.props.username,
            todosArray: []
        };
        this.renderTodos = this.renderTodos.bind(this)
        this.renderLogout = this.renderLogout.bind(this)
    }
    async componentDidMount(){
        let todos = await getTodo() || [];
        this.setState({
            todosArray: todos.data
        })
    }

    renderTodos = () =>{
        const data = this.state.todosArray;
        const todoList = data.map((todo)=>(
            <div key={todo.id}>
                <li key={todo.content}>
			    Todo: {todo.content}
				<ul>
				<li key={todo.completed}>
					completed : {todo.completed.toString()}
				</li>
				</ul>
			</li>
            </div>
          
            ))
        return todoList;
    }

    renderLogout = async ()=>{
        await authLogout()
    }

    render(){
        console.log("todos are:", this.state.todosArray)

        return(
            <div>
                <Link to ="/">Return to home</Link>
                 <h1>{this.state.username}</h1>
                 <ul>{this.renderTodos()}</ul>
                 <Link to = "/" onClick={()=>this.renderLogout()}>Logout</Link>

            </div>
        )
    }
}

export default Todo;