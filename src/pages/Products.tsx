///
import Box from '@mui/material/Box';
import Grid from '@mui/material/GridLegacy';
// import { useTheme } from '@mui/material/styles';
import { useEffect } from 'react';
import {useAppDispatch ,useAppSelector} from '../store/hook'
import { useParams } from 'react-router-dom';

//
import {Actprodcy,Cleanup  } from '../store/Prodstore/Prodstore'

import {ProductsComponent } from "../COMPONENTS/e-comers";
export default function Products() {

  ///loading, error
const params= useParams()
  const {records,} = useAppSelector(state => state.Prodstore)

  const dispatch = useAppDispatch()

  useEffect(()=>{
    if(params.id && typeof params.id =="string"){
    const id = params.id
    dispatch(Actprodcy(id))
    }
    return ()=>{
      dispatch(Cleanup())
    }

  },[dispatch,params])



  return (
  
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
        {records.map((record) => (
          <Grid item xs={4} sm={4} md={4} key={record.id}>
         <ProductsComponent {...record}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
 
}
