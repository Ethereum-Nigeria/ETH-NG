import React from 'react'

const Button = ({ value }) => {
  return (
    <>
      <button className='btn-submit' type='submit'> { value } </button>
    </>
  )
}

export default Button
