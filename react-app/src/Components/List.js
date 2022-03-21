import {useState} from 'react'
import Edit from './Edit'
import Form from './Form'


function AddTask() {
  const [items, setItems] = useState ([])

  const addNewTask = item => {
    if(!item.text || /^\s*$/.test(item.text)) {
      return
    }
    const newItems = [item, ...items]

    setItems(newItems)
    
  }

  const updateItem = (itemId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    setItems(prev => prev.map(item => (item.id === itemId ? newValue : item)))
  }

  const DeleteTask = id => {
    const deleteArr = [...items].filter(item =>{
        return item.id !== id
    })

    setItems(deleteArr)
  }

  const completeItem = id => {
    let updatedItems = items.map(item => {
      if (item.id === id){
        item.isComplete = !item.isComplete;
      }
      return item
    })
    setItems(updatedItems)
  }

  return (
    <div className='all-button'>
      <Form onSubmit={addNewTask}/>
      <div className="edit-list"><Edit items={items} 
      completeItem={completeItem} 
      DeleteTask={DeleteTask} 
      updateItem={updateItem}/></div>
    </div>
  )
}

export default AddTask
