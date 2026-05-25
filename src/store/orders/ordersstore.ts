import { createSlice } from "@reduxjs/toolkit";
import  Actorder  from "./Actordersstore/Actorder";
import  Actgetuser  from "./Actordersstore/actgetuser";

interface IProduct {
  id: number;
  title: string;
  price: number;
  cat_prefix: string;
  img: string;
  max: number;
}


interface IOrder {
  id: number;
  items: IProduct[]; 
  subtotal: number;
}

interface OrdersState {
  orderList: IOrder[]; 
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: OrdersState = {
     orderList: [],   
  loading: "idle",
  error: null,
};


export const Ordersstore = createSlice({
  name: "Orders",
  initialState,
  reducers: {
resetorder : (state) => {

  state.loading = "idle"
  state.error = null
}
       
  },
  extraReducers: (builder) => {
    builder.addCase(Actorder.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(Actorder.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.orderList = action.payload;
    });
    builder.addCase(Actorder.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string
      
    })
    ////
    builder.addCase(Actgetuser.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(Actgetuser.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.orderList = action.payload;
    });
    builder.addCase(Actgetuser.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string
      
    });
  },
  ///
});


export { Actorder ,Actgetuser  }
    export const {resetorder} = Ordersstore.actions
export default Ordersstore.reducer
export type { IOrder }