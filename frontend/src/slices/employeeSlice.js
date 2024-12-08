import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEmployeeDatas = createAsyncThunk(
  "fetchEmployeeData",
  async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/admin");
      return response.data;
    } catch(error) {
      console.log(error);
    }
  }
);

const employeeSlice = createSlice({
  name: "Employee",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEmployeeDatas.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchEmployeeDatas.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchEmployeeDatas.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    })
  },
});

export default employeeSlice.reducer;
