import { useAppSelector } from "../../store/hook"
import { Navigate } from "react-router-dom"

const ProteceRoute= ({children}:{children:React.ReactNode})=>{
    
    const {accesstoken} = useAppSelector(state => state.AuthSlice)
    console.log(accesstoken)
    if(!accesstoken){
        return <Navigate to="/login?success=false" />
    }
  
    return (
        <div>{children}</div>
    )
}   
export default ProteceRoute