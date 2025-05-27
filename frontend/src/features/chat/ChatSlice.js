import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BACKEND_URL = "http://localhost:8000/chat";

export const sendChatMessage = createAsyncThunk(
  "chat/sendChatMessage",
  async (message) => {
    const res = await axios.post(BACKEND_URL, { query: message });
    return res.data.response || "Sorry, no answer found.";
  }
);

const initialState = {
  history: [
    {
      from: "bot",
      text: "👋 Welcome to 7-Eleven! Ask me anything about our stores, products, rewards, or services.",
    },
  ],
  status: "idle",
  error: null,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addUserMessage: (state, action) => {
      state.history.push({ from: "user", text: action.payload });
    },
    clearChat: (state) => {
      state.history = initialState.history;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendChatMessage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sendChatMessage.fulfilled, (state, action) => {
        state.status = "idle";
        state.history.push({ from: "bot", text: action.payload });
      })
      .addCase(sendChatMessage.rejected, (state) => {
        state.status = "failed";
        state.history.push({
          from: "bot",
          text: "Oops! Could not connect to the 7-Eleven Assistant.",
        });
      });
  },
});

export const { addUserMessage, clearChat } = chatSlice.actions;
export default chatSlice.reducer;
