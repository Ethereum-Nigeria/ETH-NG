
const TextArea = ({ onChange, value, placeholder, name }) => {
  return (
    <>
      <textarea placeholder={placeholder} className='input' rows='4' onChange={onChange} value={ value } name={ name } />
    </>
  )
}

export default TextArea
