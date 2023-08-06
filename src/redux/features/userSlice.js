import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    value: [
      { id: 'D2W9VVnNpNtaPm89Eh16o', name: 'John Doe', email: 'john@c12.io' },
      { id: '6EZwzQNhj7vw3KKmw19vY', name: 'Jane Doe', email: 'jane@c12.io' },
    ],
  },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    removeUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      state.value = state.value.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
  },
});

export default userSlice.reducer;
export const { addUser, removeUser, updateUser } = userSlice.actions;
