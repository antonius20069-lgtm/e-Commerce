

import axios from "axios"
import { useState  } from "react"


type Tstatus = "idle" | "checking" | "available" | "notavailable" |"failed"
    


const useCheckEmail  = () =>{
const [emailavailable, setemailavailable] = useState<Tstatus>("idle");
const [enteremail, setEnteremail] = useState<null|string>("")

const chekemails = async (email:string) => {
setEnteremail(email)
setemailavailable("checking")

try{
  const response = await axios.get(`http://localhost:4000/users?email=${email}`);

if(response.data.length > 0){
setemailavailable("notavailable")
}else{

    setemailavailable("available")
}
}catch(error){
    
console.log(error)
setemailavailable("failed")
}



}
const resetemail = () => {
setemailavailable("idle")
setEnteremail(null)

}

    return {emailavailable ,enteremail,chekemails ,resetemail}
}

export default useCheckEmail 

