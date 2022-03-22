import {useState} from 'react'
import Form from './Form'

function Edit({Todos, completeTodo, DeleteTask, updateTodo}) {
  const [editTask, setEditTask] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = value => {
    updateTodo(editTask.id, value)
    setEditTask({
      id: null,
      value: ''
    })
  }
  if (editTask.id){
    return <Form edit={editTask} onSubmit={submitUpdate} />
  }

  return Todos.map((Todo, index) =>(
    <div style={{textDecoration:"lineThrough"}} className={Todo.isComplete ? 'Todo-row complete' : 'Todo-row'} key={index} >
      <div key={Todo.id} onClick={() => completeTodo(Todo.id)}>
        {Todo.text}
        </div>
        <button onClick={() => DeleteTask(Todo.id)} className='delete-button'>SUPPRIMER</button>
        <button onClick={() => setEditTask({ id: Todo.id, value: Todo.text})} className='edit-button'>EDITER</button>  
    </div>
  

  )) 
}

export default Edit