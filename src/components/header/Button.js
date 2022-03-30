import React from 'react'

const Button = ({show, setShow}) => {
 
  return (
    <div>
        <button onClick={() => setShow(!show)}>{show ? ("Close ") : ("Open ")}Add Task Bar</button>
    </div>
  )
}

export default Button