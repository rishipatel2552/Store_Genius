import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ChatBot from "./features/chat/ChatBot";
import "./App.css"

function App() {
  return (
    <Provider store={store}>
      <div style={{ minHeight: "100vh", backgroundColor: "Grey" }}>
        <ChatBot />
      </div>
    </Provider>
  );
}

export default App;
