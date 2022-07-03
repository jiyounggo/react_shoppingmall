import {
  configureStore,
  createSlice,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

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
    userSlice: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
