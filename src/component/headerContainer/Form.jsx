import React from 'react'

const Form = ({formHandle}) => {
  return (
    <form onSubmit={(event)=>formHandle(event)} >
      <div>
        <label>Name:</label>
        <input className='border' type="text" name="name"  />
      </div>
      <div>
        <label>Email:</label>
        <input  className='border' type="email" name="email"  />
      </div>

      <button  className='border' type="submit">Submit</button>
    </form>
  )
}

export default Form