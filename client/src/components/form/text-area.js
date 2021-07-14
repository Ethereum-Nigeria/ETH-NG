
const TextArea = ({ onChange, value, name}) => {
  return (
    <>
      <textarea placeholder='Leave message...' className='input' rows='4' onChange={onChange} value={value} name={name} />
    </>
  )
}

export default TextArea
