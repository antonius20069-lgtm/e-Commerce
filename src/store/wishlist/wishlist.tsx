import { createSlice } from "@reduxjs/toolkit";
import Actgetwishlist from "./act/Actgetwishlist";
import ActgetFullInfo from "./act/ActgetFullInfo";
import { Actauthlogout } from "../auth//authstor";
interface ICartState {
  items: number [];
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
  items: [],
  productFullInfo: [],
  loading: "idle",
  error: null,
};

 const wishliststore = createSlice({
  name: "Wishlist",
  initialState,

  reducers: {
    clen : (state)  => {
    
      state.productFullInfo = []

    }
  
  },

  extraReducers: (builder) => {
    builder.addCase(Actgetwishlist.pending, (state,) => {
      state.loading = "pending";
      state.error = null;
    });
        builder.addCase(Actgetwishlist.fulfilled, (state, action) => {
    state.loading = "succeeded"; // ← ده ناقص!

          if(action.payload.type === "add"){
    state.items.push(action.payload.id)
  }else{
    state.items = state.items.filter((id) => id !== action.payload.id);
    state.productFullInfo = state.productFullInfo.filter((product) => product.id !== action.payload.id);
  }



        });
            builder.addCase(Actgetwishlist.rejected, (state, action) => {

      state.loading = "failed";
      state.error = action.payload as string;
            });
            // ActgetFullInfo
                builder.addCase(ActgetFullInfo.pending, (state,) => {
      state.loading = "pending";
      state.error = null;
    });
        builder.addCase(ActgetFullInfo.fulfilled, (state, action) => {
  state.loading = "succeeded";
  if(action.payload.datat === "productsfullInfo"){
    state.productFullInfo = action.payload.data
  }else if(action.payload.datat === "products"){   
    
    
    state.items = action.payload.data
}else{
  state.items = []
  state.productFullInfo = []  

}



        });
            builder.addCase(ActgetFullInfo.rejected, (state, action) => {

      state.loading = "failed";
      state.error = action.payload as string;
            });
                   builder.addCase(Actauthlogout, (state, ) => {
state.items = []
state.productFullInfo = []
            });
  },
    
  
});

export {  Actgetwishlist ,ActgetFullInfo };

export const {clen  } = wishliststore.actions;


export default wishliststore.reducer;
