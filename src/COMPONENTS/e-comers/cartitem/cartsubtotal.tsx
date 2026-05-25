import styled from 'styled-components';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppDispatch } from '../../../store/hook';
import {Actorder} from '../../../store/orders/ordersstore'
import {clearcartplacorder} from '../../../store/cart/cartstore'
import { useState } from 'react';
type CartProps = {
    id: number;
    title: string;
    prefix: string;
    img: string;
    price: number;
    quantity?: number;
    max: number;
                    
}



export default function Cartsubtotal({ productcart ,useracss }: { productcart: CartProps[], useracss: string })
 {
const subtotal = productcart.reduce((acc, e) => {

const price = e.price ;
const quantity = e.quantity || 0;
return acc + price * quantity;
}, 0);

const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false);


    const [loding, setLoding] = useState(false);
  const [error, seterror] = useState <string | null>(null);


  const handleClickOpen = () => {
    setOpen(true);
        seterror(null)

  };

  const placeOrder = () => {
    dispatch(Actorder(subtotal)).unwrap()
    .then(() =>{
      dispatch(clearcartplacorder())
      setOpen(false)})
    .catch((e) => seterror(e))
    .finally(() => setLoding(false))
  }
  


return (
    <>
    {/*  */}
    <React.Fragment>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Place Order"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
Are you sure you want to place the order with subtotal {subtotal}
{!loding && error && <p >{error}</p>}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={placeOrder} autoFocus>

          {loding ? "loading.." : "confirm"}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
    {/*  */}
<div style={{display:"flex" , justifyContent:"space-between"}}>
<span style={{fontSize:"20px"}}>Subtotal</span>
<span style={{fontSize:"20px"}} >{subtotal}</span>
</div>
{useracss && 
<div style={{display:"flex" , justifyContent:"space-between"}}>
<span style={{fontSize:"20px"}}></span>
   <StyledWrapper>
      <button onClick={handleClickOpen} className="boton-elegante">place order</button>
    </StyledWrapper>
</div>}
</>
)
}
const StyledWrapper = styled.div`
  .boton-elegante {
  margin-top: 15px;
    padding: 10px 10px;
    border: 1px solid #2c2c2c;
    background-color: #1a1a1a;
    color: #ffffff;
    font-size: 1.1rem;
    cursor: pointer;
    border-radius: 25px;
    transition: all 0.4s ease;
    outline: none;
    position: relative;
    overflow: hidden;
    font-weight: bold;
  }

  .boton-elegante::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.25) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    transform: scale(0);
    transition: transform 0.5s ease;
  }

  .boton-elegante:hover::after {
    transform: scale(4);
  }

  .boton-elegante:hover {
    border-color: #666666;
    background: #292929;
  }`;