import {useState} from 'react'

function Form(props) {
    const [inputValue, setInputValue] = useState('')


    const handleChange = e => {
      setInputValue(e.target.value)
    }
    const handleSubmit = e => {
      e.preventDefault()

      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: inputValue
      })
    setInputValue('')
    }
    
  return (
    <div className='AddTask'>
        <form className='task-form' onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={inputValue} 
            name="text" 
            className='task-input' 
            autoComplete='off' 
            placeholder='Ajouter une tâche' 
            onChange={handleChange}
            />
          <button className='add-button'>AJOUTER</button>
        </form>
    </div>
  )
}

export default Form