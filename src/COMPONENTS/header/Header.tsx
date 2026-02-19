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
import Link from '@mui/material/Link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
const pages = ["home", "categories", "about"];
import Badge, { badgeClasses } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
//
import Switch from "./button/butt";
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
function Header({
  mode,
  setMode,
}: {
  mode: "light" | "dark";
  setMode: React.Dispatch<"light" | "dark">;
}){
const theme = useTheme()

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;


  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (      
    <Box>
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
    <Box sx={{mt:{xs:2,md:0}}}>
      <AppBar style={{borderRadius:"5px"}} position="static">
   

        <Container style={{background:theme.palette.ant.back ,borderRadius:"5px"}}>
          <Toolbar disableGutters>
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
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
    <IconButton style={{marginTop:"10px",marginLeft:"10px"}}>
  <ShoppingCartIcon fontSize="small" />
  <CartBadge badgeContent={100} color="primary" overlap="circular" />
</IconButton>
    </Box>
  );
}
export default Header;
