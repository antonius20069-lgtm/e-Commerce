
import { useEffect } from "react";
import { useAppDispatch ,useAppSelector} from '../store/hook'
import {Actgetuser} from '../store/orders/ordersstore'



//
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell  from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import {resetorder} from '../store/orders/ordersstore'
//
import Loading from '../COMPONENTS/feedback/loading/loading';

interface IProduct {
  id: number;
  title: string;
  price: number;
  cat_prefix: string;
  img: string;
  max: number;
}



const Orders = () => {

  const [open, setOpen] = React.useState(false);
  const [selectproduct, setselectproduct] = React.useState<IProduct[]>([]);



const dispatch = useAppDispatch()
const {orderList,loading, error} = useAppSelector(state => state.Ordersstore)

useEffect(() => {

const unsubscribe = dispatch(Actgetuser())

return () => {unsubscribe.abort()
  dispatch(resetorder())
}

}, [dispatch])

function createData(
  id: string,
  Items: number,
  TotalPrice: number,

) {
  return { id, Items, TotalPrice  };
}

const rows = orderList.map((e) => 
  createData( e.id.toString(), e.items.length, e.subtotal)
);


  const handleClickOpen = (id: number) => {
    const product = orderList.find((e) => e.id == id);
    const productss = product?.items ?? [];
       setOpen(true); 

    console.log(productss) //undfined


    setselectproduct((prev) => [...prev,...productss]);
 
  };



  const handleClose = () => {
    setselectproduct([])
    setOpen(false);
  };




    return   (
    
      <Loading loading={loading} error={error}>
{/* ////// */}
   <React.Fragment>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {" prduct Details"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {selectproduct.map((e) => {return(
            <ul>
              <li> <img src={e.img} /></li>
<li>title {e.title}</li>
<li> {e.price}</li>
<hr></hr>



</ul>) })}
          </DialogContentText>
        </DialogContent>
  
      </Dialog>
    </React.Fragment>
{/* //////// */}
     <TableContainer component={Paper}>
      <Table sx={{ minWidth:300}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order Number</TableCell>
            <TableCell align="center">Items</TableCell>
            <TableCell align="center">Total Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.Items} /  <span 
style={{cursor:"pointer" ,textDecoration:"underline"}} 
 onClick={ () => {handleClickOpen(Number(row.id))}
 

 }
>prduct Details</span>

</TableCell>
              <TableCell align="center">{row.TotalPrice}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Loading>
  );
};

export default Orders;