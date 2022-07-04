import {
  configureStore,
  createSlice,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 11, name: "White and Black", price: 1000, count: 1 },
    { id: 12, name: "Grey Yordan", price: 4000, count: 1 },
    { id: 13, name: "oh my god", price: 2000, count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      let 번호 = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[번호].count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
    deltetItem(state, action) {
      let copy = [...state];
      let 필터 = copy.filter((a) => a.id !== action.payload);
      return 필터;
    },
  },
});

export let { addCount, addItem, deltetItem } = cart.actions;

let userSlice = createSlice({
  name: "userSlice",
  initialState: {
    displayName: "",
    uid: "",
    accessToken: "",
  },
  reducers: {
    loginUser(state, action) {
      state.displayName = action.payload.displayName;
      state.uid = action.payload.uid;
      state.accessToken = action.payload.accessToken;
    },
    clearUser(state) {
      state.displayName = "";
      state.uid = "";
      state.accessToken = "";
    },
  },
});
export let { loginUser, clearUser } = userSlice.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
    userSlice: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
