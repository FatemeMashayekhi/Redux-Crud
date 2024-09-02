/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  usersList: [],
  loading: false,
  error: "",
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const res = await axios.get("http://localhost:3000/users");
    return res.data;
  } catch (e) {
    console.log(e.message);
  }
});

export const postUsers = createAsyncThunk(
  "users/postUsers",
  async (newUser) => {
    try {
      const res = await axios.post("http://localhost:3000/users", newUser);
    } catch (e) {
      console.log(e.message);
    }
  }
);

export const deleteUsers = createAsyncThunk("users/deleteUsers", async (id) => {
  try {
    const res = await axios.delete(`http://localhost:3000/users/${id}`);
  } catch (e) {
    console.log(e.message);
  }
});

export const editUsers = createAsyncThunk(
  "users/editUsers",
  async ({ userId, name, mail }) => {
    try {
      const res = await axios.put(`http://localhost:3000/users/${userId}`, {
        name,
        email: mail,
      });
    } catch (e) {
      console.log(e.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.usersList = action.payload;
    });

    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.usersList = [];
      state.error = action.payload;
    });

    //////////////

    builder.addCase(postUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(postUsers.fulfilled, (state, action) => {
      state.loading = false;
    });

    builder.addCase(postUsers.rejected, (state, action) => {
      state.loading = false;
      state.usersList = [];
      state.error = action.payload;
    });

    ////////////////

    builder.addCase(deleteUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(deleteUsers.fulfilled, (state) => {
      state.loading = false;
    });

    builder.addCase(deleteUsers.rejected, (state, action) => {
      state.loading = false;
      state.usersList = [];
      state.error = action.payload;
    });

    ////////////////

    builder.addCase(editUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(editUsers.fulfilled, (state) => {
      state.loading = false;
    });

    builder.addCase(editUsers.rejected, (state, action) => {
      state.loading = false;
      state.usersList = [];
      state.error = action.payload;
    });
  },
});

export default usersSlice.reducer;
