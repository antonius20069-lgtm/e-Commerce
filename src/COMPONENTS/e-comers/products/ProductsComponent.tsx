import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
//
interface Iprops{
title :string,
img :string,
prefix:string,
}
export default function ProductsComponent(props:Iprops) {
  const theme = useTheme()
const {title,img,prefix}= props
  return (
    <Link to={`/categories/products/${prefix}`} style={{textDecoration:"none"}}>
    <Card  style={{maxWidth: 345 ,borderRadius:"20px"   , color: theme.palette.ant.back ,backgroundColor:  theme.palette.ant.back ,backgroundImage: theme.palette.ant.back ,}} >
      <CardActionArea>
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

        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}
