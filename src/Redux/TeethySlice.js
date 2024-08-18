import { createSlice } from "@reduxjs/toolkit";

export const TeethySlice = createSlice({
  name: "Teethy",
  initialState: {
    exp: "852",
    stuff: "125",
    Total_pations: "150,000",
    AppointmentPrice: "102$",
    pations_book: [],
    ResultSearch: [
      // {
      //   first_name: "Abdallh",
      //   last_name: "Sabry",
      //   mobile: "01091415560",
      //   gender: "male",
      //   date: "2024-06-18T18:06",
      //   age: "20",
      // },
    ],
    Prev_approved: false,
  },
  reducers: {
    InsertNewBook: (state, action) => {
      let isexit = false;
      state.pations_book.forEach((p) => {
        if (p.date === action.payload.date) {
          state.Prev_approved = true;
          isexit = true;
        }
      });
      if (!isexit) {
        state.pations_book.push(action.payload);
      }
    },
    HandelSearchBook: (state, action) => {
      const Result = state.pations_book.find(
        (person) =>
          person.first_name === action.payload.Rev_Name &&
          person.mobile === action.payload.Rev_Mobile
      );
      state.ResultSearch.push(Result);
    },
    HandleDeleteBook: (state) => {
      while (state.ResultSearch.length > 0) {
        state.ResultSearch.shift();
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { InsertNewBook, HandelSearchBook, HandleDeleteBook } =
  TeethySlice.actions;

export default TeethySlice.reducer;
