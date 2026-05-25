import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import {Actgetwishlist} from '../../../store/wishlist/wishlist'
import Button from '@mui/material/Button';
//
import {useAppDispatch } from '../../../store/hook'
import { addtocart } from '../../../store/cart/cartstore';
import { memo,  } from 'react';
import Like from '../../../assets/like';
import { Box } from '@mui/material';
//
interface Iprops{
  id:number,
title :string,
img :string,
prefix:string,
price:number,
max:number,
qua?:number
}

const ProductsComponent= memo(function (props:Iprops) {
    const {title,img, price,id , max, qua}= props
    const quantaty = max - (qua ?? 0)
    const quantatyreched = quantaty <=0 ? true : false
  
  const dispatch = useAppDispatch()

function Addtocart(){

 dispatch(addtocart(id))


}

function likeL(){

   dispatch(Actgetwishlist(id ));
}





  const theme = useTheme()

  return (
    <Card  style={{position:"relative" ,maxWidth: 345 ,borderRadius:"20px"   , color: theme.palette.ant.back ,backgroundColor:  theme.palette.ant.back ,backgroundImage: theme.palette.ant.back ,}} >
        <CardMedia
        style={{color: theme.palette.ant.back}}
          component="img"
          height="300"
          image= {img}
          alt="green iguana"
        />
        <CardContent style={{ borderRadius:"20px"}}>
          <Typography style={{color:"white"}} gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography style={{display :"flex", justifyContent :"start" , color:"white"}} variant="body2" color="text.secondary">
               {price} EGP
          </Typography>
<Typography>{quantaty} quantaty</Typography>

<Button disabled={quantatyreched} onClick={() => {Addtocart()}} variant="contained" disableElevation style={{backgroundColor: theme.palette.ant.to, color: theme.palette.ant.tex}}>
Add to cart </Button>
<Box sx={{ marginBottom:"-10px",position:"absolute", right:"25px" ,bottom:"25px"}}>
<Like like={likeL}  id={id}/>
</Box>
        </CardContent>
      
    </Card>
    
  );
}
)
export default ProductsComponent;
