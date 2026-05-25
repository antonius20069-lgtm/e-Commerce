import { createSelector } from "@reduxjs/toolkit";
import type{ RootState } from "../../store"; 


const getcarttotalquantity = createSelector((state:RootState)=> state.cartstore.items,(items)=> {  

  const totalquantity = Object.values(items).reduce((total: number, qty) => {
    return total + (Number(qty) || 0);
  }, 0);

  return totalquantity;
})


export {getcarttotalquantity}