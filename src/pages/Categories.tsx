
// import { useTheme } from '@mui/material/styles';
import { useEffect } from 'react';
import {Actgetcateg ,clenn} from '../store/Categstore/Categstore'
import {useAppDispatch ,useAppSelector} from '../store/hook'
import Loading from '../COMPONENTS/feedback/loading/loading';

//
import Gridl from '../COMPONENTS/comon/gridlist/Grid';
import { CategoriesComponent } from "../COMPONENTS/e-comers";
export default function Categories() {

  ///loading, error

  const {records,loading, error} = useAppSelector(state => state.Categstore)

  const dispatch = useAppDispatch()

  useEffect(()=>{
    if(records.length == 0){
      dispatch(Actgetcateg())
    }
      return () => {dispatch(clenn())
      }
   
  },[dispatch])



  return (
  <Loading loading={loading} error={error}>
       <Gridl records={records} renderitem = {(record) => <CategoriesComponent {...record} /> } /> 
        
 
    </Loading>
  );
 
}
