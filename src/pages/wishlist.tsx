import { useEffect,  } from "react";
import {useAppDispatch ,useAppSelector} from '../store//hook'
import { ActgetFullInfo  , clen } from "../store/wishlist/wishlist";
 import {ProductsComponent } from "../COMPONENTS/e-comers/index";
import Loading from '../COMPONENTS/feedback/loading/loading';
import Gridl from '../COMPONENTS/comon/gridlist/Grid';


export default function Wishlist(){
const dispatch = useAppDispatch()


 const {productFullInfo,loading, error} = useAppSelector(state => state.wishliststore)






const cartItemsCount = productFullInfo.map((e) => ({ ...e, qua: 0 }))
useEffect(() => {

dispatch(ActgetFullInfo("productsfullInfo"))
return()=>{dispatch(clen())}

}, [dispatch])
return(
<>
  <Loading loading={loading} error={error}>
    <Gridl 
  records={cartItemsCount}  
  renderitem={(record) => <ProductsComponent {...record}  />} 
/>
      </Loading>
      </>
)
}