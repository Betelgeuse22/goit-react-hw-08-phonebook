import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
  },
  extraReducers: {
    [logOut.fulfilled](state) {
      state.value = '';
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
