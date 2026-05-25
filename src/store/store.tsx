import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { persistStore, persistReducer ,PURGE, PERSIST,PAUSE ,REHYDRATE, REGISTER,FLUSH} from "redux-persist";
import storage from "redux-persist/lib/storage";
import Categstore from "./Categstore/Categstore";
import Prodstore from "./Prodstore/Prodstore";
import cartstore from "./cart/cartstore";
import wishliststore from "./wishlist/wishlist";
import  AuthSlice  from "./auth/authstor";
import Ordersstore from "./orders/ordersstore";

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cartstore","authstore"],
};
const authPersistConfig = {
    key: "authstore",
  storage,
whitelist: ["accesstoken", "user"],
  
}

const persistConfig = {
  key: "cartstore",
  storage,
  whitelist: ["items",],
};

const wishlistpersistConfig = {
  key: "wishliststore",
  storage,
  whitelist: ["items",],
};
const rootReducer = combineReducers({
  Categstore: Categstore,
  Prodstore: Prodstore,
  cartstore:  persistReducer(persistConfig, cartstore),
  wishliststore: persistReducer(wishlistpersistConfig, wishliststore),
  AuthSlice: persistReducer(authPersistConfig, AuthSlice),
  Ordersstore:Ordersstore
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);


 const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware({
      serializableCheck:{
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
const persistor = persistStore(store);
export  {  store, persistor };
