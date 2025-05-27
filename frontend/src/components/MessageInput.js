import React, { useState } from "react";
import { InputBase, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function MessageInput({ onSend, disabled }) {
  const [msg, setMsg] = useState("");
  const handleSend = (e) => {
    e.preventDefault();
    if (msg.trim()) {
      onSend(msg);
      setMsg("");
    }
  };

 return (
    <form
      onSubmit={handleSend}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        background: "#f9f9f9",
        borderRadius: 16,
        width: "100%",
      }}
    >
      <InputBase
        placeholder="Ask me about 7-Eleven USA..."
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        disabled={disabled}
        sx={{
          px: 2,
          flex: 1,
          fontSize: "1rem",
        }}
        autoFocus
      />
      <IconButton
        color="primary"
        type="submit"
        disabled={disabled || !msg.trim()}
        sx={{
          bgcolor: "#009540",
          color: "#fff",
          borderRadius: 12,
          "&:hover": { bgcolor: "#f58220" },
        }}
      >
        <SendIcon />
      </IconButton>
    </form>
  );
}
