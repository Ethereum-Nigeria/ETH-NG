import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';


const Hamburger = ({toggleNav}) => {
  return (
    <div >
      <MenuOpenRoundedIcon className='toggle'  onClick={() => {
        toggleNav()
      }}   />
    </div>
  )
}

export default Hamburger
