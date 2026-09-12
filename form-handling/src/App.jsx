import { useState } from 'react'
import React from 'react';

const App = () => {
  const [title,setTitle] = useState('')
  const submitHandler = (elem)=> {
    elem.preventDefault()
    console.log('Form Submitted by',title);

    setTitle('')
  }
  
  return (
    <>
    <form onSubmit = {(elem)=> {
      submitHandler(elem)
    }}>
      <input type="text"
       placeholder = "Enter your name"
       value={title}
       onChange={(elem)=>{
        setTitle(elem.target.value)
       }
       }/>
      <button>Submit</button>

    </form>
    </>
  )
}

export default App
