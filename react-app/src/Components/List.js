import {useState} from 'react'
import Edit from './Edit'
import Form from './Form'


function AddTask() {
  const [Todos, setTodos] = useState ([])

  const addNewTask = Todo => {
    if(!Todo.text || /^\s*$/.test(Todo.text)) {
      return
    }
    const newTodos = [Todo, ...Todos]

    setTodos(newTodos)
    
  }

  const updateTodo = (TodoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    setTodos(prev => prev.map(Todo => (Todo.id === TodoId ? newValue : Todo)))
  }

  const DeleteTask = id => {
    const deleteArr = [...Todos].filter(Todo =>{
        return Todo.id !== id
    })

    setTodos(deleteArr)
  }

  const completeTodo = id => {
    let updatedTodos = Todos.map(Todo => {
      if (Todo.id === id){
        Todo.isComplete = !Todo.isComplete;
      }
      return Todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div className='all-button'>
      <Form onSubmit={addNewTask}/>
      <div className="edit-list"><Edit Todos={Todos} 
      completeTodo={completeTodo} 
      DeleteTask={DeleteTask} 
      updateTodo={updateTodo}/></div>
    </div>
  )
}

export default AddTask
