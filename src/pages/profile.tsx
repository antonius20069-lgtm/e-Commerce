import {useAppSelector} from '../store/hook'


const Profile = ()=>{




 const user = useAppSelector(state => state.AuthSlice.user)




return(
<>
<ul>
<li>firstname: {user?.firstname}</li>
<li>lastname: {user?.lastname}</li>
<li>email: {user?.email}</li>

</ul>



</>

    )
}

export default Profile