import {useState} from 'react'
import Form from './Form'

function Edit({items, completeItem, DeleteTask, updateItem}) {
  const [editTask, setEditTask] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = value => {
    updateItem(editTask.id, value)
    setEditTask({
      id: null,
      value: ''
    })
  }
  if (editTask.id){
    return <Form edit={editTask} onSubmit={submitUpdate} />
  }

  return items.map((item, index) =>(
    <div style={{textDecoration:"lineThrough"}} className={item.isComplete ? 'item-row complete' : 'item-row'} key={index} >
      <div key={item.id} onClick={() => completeItem(item.id)}>
        {item.text}
        </div>
        <button onClick={() => DeleteTask(item.id)} className='delete-button'>SUPPRIMER</button>
        <button onClick={() => setEditTask({ id: item.id, value: item.text})} className='edit-button'>EDITER</button>  
    </div>
  

  )) 
}

export default Edit