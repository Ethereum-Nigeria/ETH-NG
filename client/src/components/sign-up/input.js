
const Input = ({type, placeholder, name, value, onChange}) => {
  return (
    <>    
      <input placeholder={placeholder} name={name}  type={type} autoComplete='off'  value={value}  onChange={onChange}  />
    </>
  )
}

export default Input
