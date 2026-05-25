///
// import { useTheme } from '@mui/material/styles';
import { useEffect } from 'react';
import {useAppDispatch ,useAppSelector} from '../store/hook'
import { useParams } from 'react-router-dom';

//
import {Actprodcy,cleanup  } from '../store/Prodstore/Prodstore'

import {ProductsComponent } from "../COMPONENTS/e-comers/index";
import Loading from '../COMPONENTS/feedback/loading/loading';
import Gridl from '../COMPONENTS/comon/gridlist/Grid';
export default function Products() {

const params= useParams()
  const {records,loading, error} = useAppSelector(state => state.Prodstore)


const cartItrm = useAppSelector(state => state.cartstore.items)

  const cartItemsCount = records.map((e)=>({...e,qua:cartItrm[e.id] || 0}))

  const dispatch = useAppDispatch()

  useEffect(()=>{



    if(params.id && typeof params.id =="string"){
    const id = params.id
    dispatch(Actprodcy(id))
    }
    return ()=>{
      dispatch(cleanup())
    }

  },[dispatch,params])



  return (
  <Loading loading={loading} error={error}>
    <Gridl 
  records={cartItemsCount}  
  renderitem={(record) => <ProductsComponent {...record} />} 
/>
      </Loading>
  );
 
}
