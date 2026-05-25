import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';

import { Link, Outlet } from 'react-router-dom';

const ProfileLayout=()=>{
      const [view, setView] = React.useState('list');

  const handleChange = (_event: React.MouseEvent<HTMLElement>, nextView: string) => {
    setView(nextView);
  };
    return(
       <>
      <Grid container spacing={1}>
       <Grid size={{ xs: 4, sm:3 , md:2}}>
   
       <ToggleButtonGroup
  orientation="vertical"
  value={view}
  exclusive
  onChange={handleChange}
>
  <ToggleButton component={Link} to="/profile"  style={{  width:"120px"  ,fontSize:"15px",textTransform:"unset"}} value="profile" aria-label="list">
 profile
  </ToggleButton>
  <ToggleButton component={Link} to="/profile/orders" style={{  width:"120px" ,fontSize:"15px",textTransform:"unset"}} value="order" aria-label="module">
  
    order
  </ToggleButton>
</ToggleButtonGroup>
        </Grid>
        <Grid  size={9}>
            <Outlet/>
        </Grid>
      </Grid>
    </>
    )
}
export default ProfileLayout




