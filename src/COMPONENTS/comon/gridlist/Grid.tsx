///
import Box from '@mui/material/Box';
import Grid from '@mui/material/GridLegacy';
import type React from 'react';
type gridlest <T> = {
   records : T[]
   renderitem :(record:T)=> React.ReactNode

}

type record = {
    id:number,
}

const Gridl =<T extends record> ({records,renderitem}:gridlest<T>) => {



 return (     
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
        {records.map((record) => (
          <Grid item xs={4} sm={4} md={4} key={record.id}>
        { renderitem(record) }
          </Grid>
        ))}
      </Grid>
    </Box>)
}

export default Gridl