import { createSlice } from "@reduxjs/toolkit";
import { getcarttotalquantity } from "./selectors";
import Actcart from "./actcart/actcart";
interface ICartState {
  items: { [key: number]: number };
  productFullInfo:  {
    id: number;
    title: string;
    prefix: string;
    price: number;
    img: string;
    quantity?: number 
    max:number;
  }[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ICartState = {
  items: {},
  productFullInfo: [],
  loading: "idle",
  error: null,
};

 const cartSlice = createSlice({
  name: "Cart",
  initialState,

  reducers: {
    addtocart: (state, action) => {
      const id: number = action.payload;
      if (state.items[id]) {
        state.items[id] += 1;
      } else {
        state.items[id] = 1;
      }
    },
    cartquantity: (state, action) => {
     
state.items[action.payload.id] = action.payload.quantity
  },
cartremovecartitem: (state, action) => {
  delete state.items[action.payload]
  state.productFullInfo=state.productFullInfo.filter((e) => e.id !== action.payload)

}
,clinee: (state) => {

    state.productFullInfo = [];
  },
  clearcartplacorder: (state) => {
    state.items={}
    state.productFullInfo = [];

   
  },
  },
  extraReducers: (builder) => {
    builder.addCase(Actcart.pending, (state,) => {
      state.loading = "pending";
      state.error = null;
    });
        builder.addCase(Actcart.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productFullInfo = action.payload as ICartState['productFullInfo'];

        });
            builder.addCase(Actcart.rejected, (state, action) => {

      state.loading = "failed";
      state.error = action.payload as string;
            });
  },
});

export { getcarttotalquantity, Actcart };

export const { clearcartplacorder, clinee, addtocart ,cartquantity,cartremovecartitem } = cartSlice.actions;

export default cartSlice.reducer;
