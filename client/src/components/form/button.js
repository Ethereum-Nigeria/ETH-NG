import React from 'react'

const Button = ({ placeholder }) => {
  return (
    <>
      <button className='btn-submit' type='submit'>{ placeholder }</button>
    </>
  )
}

export default Button
