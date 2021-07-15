import { LoadingWrapper } from "./loading.style"
import BeatLoader from "react-spinners/BeatLoader";


const Loading = () => {
  return (
   <LoadingWrapper>
     <BeatLoader loading size={20}  color='gray' />
   </LoadingWrapper>
      
  )
}

export default Loading
 