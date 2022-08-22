import React from "react";

export default function InputTodo({addTodo}){
 const [todo,setTodo] = React.useState("");

    return (
        <div>
            <h1>Add Todo</h1>
            <input type="text" value={todo} name="" id="" onChange={(e)=>setTodo(e.target.value)} placeholder="Title"/>
            <button  onClick={()=>{setTodo("");addTodo(todo);}}>Add</button>
        </div>
    );
}

