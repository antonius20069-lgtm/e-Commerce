import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Logout from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';

// 

import Link from '@mui/material/Link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
const pages = ["home", "categories", "about"];
import Badge, { badgeClasses } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
//
import Switch from "./button/butt";
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from "../../store/hook";
import { getcarttotalquantity } from "../../store/cart/cartstore";
import { ActgetFullInfo } from "../../store/wishlist/wishlist";

import "./head.css"

//
import { useState ,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {Actauthlogout} from "../../store/auth/authstor";
  function Header({


  mode,
  setMode,
}: {
  mode: "light" | "dark";
  setMode: React.Dispatch<"light" | "dark">;
}){


  
const theme = useTheme()
const navigate = useNavigate();

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;



  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const dispatch = useAppDispatch();
  const totalQuantity = useAppSelector(state => state.wishliststore.items.length);
  const {accesstoken ,user} = useAppSelector(state => state.AuthSlice);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 
const cartItemsCount = useAppSelector(getcarttotalquantity);
const [pump, setPump] = useState(false);

const quantity = `${ pump ? "pumpp" : "" }`
useEffect(() => {
setPump(true);

const timer = setTimeout(() => {
  setPump(false);
}, 2000);
return () => clearTimeout(timer);
},[cartItemsCount])

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if(accesstoken){
dispatch(ActgetFullInfo("products"))

    }
  }, [dispatch,accesstoken])

  return (      
    <Box  >
    <Typography 
    style={{color:theme.palette.ant.tex}}
    sx={{display:{md:"none",sm:"none"}}}  variant="h6">
 e-{" "}
              <span

                style={{
                  padding: "10px",
                  color: theme.palette.ant.to,
                  borderRadius:"9px",
                  backgroundColor: theme.palette.ant.back,
                  width: "fit-content",
                }}
              >
             commerce
              </span>

                    </Typography>
    <Box  sx={{ mt:{xs:2,md:0}}}>
      <AppBar style={{borderRadius:"10px" }} position="static">
   

        <Container style={{  background:theme.palette.ant.back  , borderRadius:"5px"}}>
          <Toolbar  disableGutters>
            <Box sx={{ mr: 3 }}>
              <Switch mode={mode} setMode={setMode} />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
               
                mr: 2,
                display: { xs: "none" ,sm: "block", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: theme.palette.ant.to,
                textDecoration: "none",
              }}
            >
              e-{" "}
              <span
                style={{
                  paddingLeft: "10px",
                  color: theme.palette.ant.back,
                  borderRadius:"5px",
                  backgroundColor: theme.palette.ant.to,
                }}
              >
                commerce
              </span>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}
                  component={RouterLink}
      to={page === "home" ? "/" : `/${page}`} 
                  
                  >
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: theme.palette.ant.to,
                textDecoration: "none",
              }}
            >
             e-{" "}
              <span
                style={{
                  paddingLeft: "10px",
                  color: "red",
                  borderRadius:"5px",
                  backgroundColor: theme.palette.ant.back,
                }}
              >
                commerce
              </span>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                      component={RouterLink}
      to={page === "home" ? "/" : `/${page}`} 
                >
                  {page}
                </Button>
              ))}
            </Box>
            {accesstoken === null ? <>
             <Box style={{color:theme.palette.ant.to, display:"flex", gap:"15px" ,alignItems:"center" }} sx={{ flexGrow: 0 }}>
             <Link 
  component={RouterLink} 
  to="/login" 
  underline="hover" 
  sx={{ color: "white" }}

>
  login
</Link>
<Link 
  component={RouterLink} 
  to="/register" 
  underline="hover" 
  sx={{ color: "white" }}
>register
</Link>
             </Box>
            </> :
            // token////////////
            <>
            <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

        <Tooltip title= { user?.firstname}>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ background:theme.palette.ant.to ,color:"white", width: 32, height: 32 }}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
           <Link 
  component={RouterLink} 
  to="/Profile" 
  underline="none" 
  sx={{ color: "white" }}
>
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        </Link>

                   <Link 
  component={RouterLink} 
  to="/profile/orders" 
  underline="none" 
  sx={{ color: "white" }}
>
     
        <MenuItem onClick={handleClose}>
          <Avatar /> orders
        </MenuItem>
        </Link>

        <Divider />
       
   <Link 
  component={RouterLink} 
  to="/" 
  underline="none" 
  sx={{ color: "white" }}
>

        <MenuItem   onClick={ () => {
        
          dispatch(Actauthlogout())
          }} >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
</Link>


      </Menu>
    </React.Fragment>
            </>}
           
{/*  */}
        
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
    <IconButton  onClick={() => navigate("/cart")} style={{marginTop:"10px",marginLeft:"10px"}}>
  <ShoppingCartIcon  fontSize="small" />
  <CartBadge className={quantity} badgeContent={cartItemsCount} color="primary" overlap="circular" />
</IconButton>

    <IconButton  onClick={() => navigate("/wishlist")} style={{marginTop:"10px",marginLeft:"15px"}}>
  <FavoriteIcon fontSize="small" />
  <CartBadge className={quantity} badgeContent={totalQuantity} color="primary" overlap="circular" />
</IconButton>
    </Box>
  );
}
export default Header;
