

 function ShowTodo({title,status,id,handleDelete}){
  //  console.log(title,status,id);
  return (
    <div>
     <p>{title}</p>
     <p>{status}</p>
     <button onClick={()=>handleDelete(id)}>Delete</button>
    </div>
  );
    
}

export default ShowTodo;