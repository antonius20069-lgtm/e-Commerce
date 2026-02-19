///
import Box from '@mui/material/Box';
import Grid from '@mui/material/GridLegacy';
// import { useTheme } from '@mui/material/styles';
import { useEffect } from 'react';
import {Actgetcateg} from '../store/Categstore/Categstore'
import {useAppDispatch ,useAppSelector} from '../store/hook'


//
import { CategoriesComponent } from "../COMPONENTS/e-comers";
export default function Categories() {

  ///loading, error

  const {records,} = useAppSelector(state => state.Categstore)

  const dispatch = useAppDispatch()

  useEffect(()=>{
    if(records.length === 0){
      dispatch(Actgetcateg())
    }
  },[dispatch,records])



  return (
  
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
        {records.map((record) => (
          <Grid item xs={4} sm={4} md={4} key={record.id}>
         <CategoriesComponent {...record}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
 
}
