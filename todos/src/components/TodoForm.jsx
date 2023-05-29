// import { Todo } from "../models/Todo";
import { useState } from "react";

export const TodoForm = ({ addTodo }) => {

    const [todoo, setTodoo] = useState("");

    // const handleChange = (e) => {
        
    //     // setTodoo({...todoo, [e.target.name]: e.target.value});
    //     setTodoo(oldTodo => [...oldTodo, e.target.value]);
        
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todoo);
        addTodo(todoo);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={todoo.classTodo} 
            onChange={(e) => {setTodoo(e.target.value)}} 
            name="todo"
            />
            <button>Add</button>
        </form>
    );
}