import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

// Initial state
const initialState = {
    _studentName: "",
    _students: [],
    _editableStudent: {},
};

// Create students slice
const studentsSlice = createSlice({
    name: "studentReducer",
    initialState,
    reducers: {
        setStudentName: (state, action) => {
            state._studentName = action.payload;
        },
        setStudents: (state, action) => {
            state._students = action.payload;
        },
        setEditableStudent: (state, action) => {
            state._editableStudent = action.payload;
        },
    }
});

export default studentsSlice.reducer;

// Selectors
export const getStudentSelector = (state) => state.studentReducer;

// Action exports
export const { setStudentName, setStudents, setEditableStudent } = studentsSlice.actions;
