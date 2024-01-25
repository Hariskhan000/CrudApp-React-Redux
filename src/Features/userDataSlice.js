import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


// create action
export const createuser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
    const response = await fetch("https://6581558c3dfdd1b11c42fd3a.mockapi.io/crudproject", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    });
    try {
        const result = response.json();
        return result;

    } catch (error) {
        return rejectWithValue(error)

    }
});
// showaction
export const showuser = createAsyncThunk("showUser", async () => {
    const response = await axios.get("https://6581558c3dfdd1b11c42fd3a.mockapi.io/crudproject")
    const result = await response.data;
    return result;
})

// deleteaction

export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {
    const response = await fetch(`https://6581558c3dfdd1b11c42fd3a.mockapi.io/crudproject/${id}`, {
        method: "DELETE",
    });
    try {
        const result = response.json();
        return result;

    } catch (error) {
        return rejectWithValue(error)

    }
});

// update Action  

export const updateUser = createAsyncThunk("updateUser", async (data, { rejectWithValue }) => {
    console.log("updated data", data)
    const response = await fetch(`https://6581558c3dfdd1b11c42fd3a.mockapi.io/crudproject/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    });
    // return response;
    try {
        const result = response.json();
        return result;

    } catch (error) {
        return rejectWithValue(error)

    }
});
export const userDetail = createSlice({
    name: "userDetails",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(createuser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(createuser.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push = action.payload;
        })
        builder.addCase(createuser.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.error = true;
        })

        builder.addCase(showuser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(showuser.fulfilled, (state, action) => {
            console.log(action.payload)
            state.loading = false;
            console.log(state.users)
            state.users = action.payload;
        })
        builder.addCase(showuser.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.error = true;
        })
        builder.addCase(deleteUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false;
            const { id } = action.payload
            if (id) {
                state.users = state.users.filter((ele) => ele.id !== id);
            }
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.error = true;
        })
        builder.addCase(updateUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = state.users.map((ele) => (ele.id === action.payload.id ? action.payload : ele)
            )
        })
        builder.addCase(updateUser.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.error = true;
        })
    },
});
export default userDetail.reducer;