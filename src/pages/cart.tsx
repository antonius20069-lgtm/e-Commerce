import Cartitem from "../COMPONENTS/e-comers/cartitem/cartitem";

import Cartsubtotal from "../COMPONENTS/e-comers/cartitem/cartsubtotal";
import { useAppSelector, useAppDispatch } from "../store/hook";

import LottieHandler from "../COMPONENTS/feedback/LottieHandl/LottieHandler";
import  { useEffect } from "react";
import { Actcart  ,cartquantity ,cartremovecartitem,clinee} from "../store/cart/cartstore";
import Loading from "../COMPONENTS/feedback/loading/loading";
import {useCallback} from 'react'
import {resetorder} from '../store/orders/ordersstore'
type CartProps = {
    id: number;
    title: string;
    prefix: string;
    img: string;
    price: number;
    quantity?: number;
    max: number;
}
export default function Cart() {
  const { items, productFullInfo, loading, error } = useAppSelector(
    (state) => state.cartstore,
  );


const useracss = useAppSelector(state => state.AuthSlice.accesstoken)
const loadingorder = useAppSelector(state => state.Ordersstore.loading)

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(Actcart());

    return () => {dispatch(clinee())
          dispatch(resetorder());
    }
    
  }, [dispatch]);

const productcart: CartProps[] = productFullInfo.map((e) => {
  return { ...e, quantity: items[e.id] };
});

const changequantity = useCallback< (id: number, quantity: number) => void>((id: number, quantity: number) => {
dispatch(cartquantity({id, quantity}))},[dispatch])


const removecartitem = useCallback< (id: number) => void>((id: number) => {
  dispatch(cartremovecartitem(id))
},[dispatch])




  return (
    <>
      <Loading loading={loading} error={error}>
   {productcart.map((e) => (
          <Cartitem key={e.id} {...e}
          changequantity= {changequantity}
          removecartitem={removecartitem}
          quantity={e.quantity ?? 1}
          />
        ))}
{ Object.keys(items).length > 0 && <Cartsubtotal useracss={useracss ?? ""} productcart={productcart} /> }
   
        
 {/* ✅ لو الأوردر نجح اعرض success */}
      {loadingorder === "succeeded" ? (
        <LottieHandler message="Your order placed successfully!" type="success" />
      ) : (
  
        productcart.length === 0 && (
          <LottieHandler message="Your cart is empty" type="empty" />
        )
      )}
</Loading>
    </>
  );
}
