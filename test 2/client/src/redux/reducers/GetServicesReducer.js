import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  arr: [],
  loading: true,
  error: false,
  one: [],
};
export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    successServicess: (state, action) => {
      state.arr = action.payload;
      state.error = false;
      state.loading = false;
    },
    failServices: (state) => {
      state.error = true;
      state.loading = false;
    },
    tryServices: (state) => {
      state.loading = true;
      state.error = false;
    },
    successOneService: (state, action) => {
      state.one = action.payload;
      state.error = false;
      state.loading = false;
    },
  },
});
export const {
  tryServices, successServicess, failServices, successOneService,
} = servicesSlice.actions;
export default servicesSlice.reducer;
