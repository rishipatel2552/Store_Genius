import React from "react";

export default function MessageList({ history }) {
   return (
    <div>
      {history.map((msg, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            justifyContent: msg.from === "user" ? "flex-end" : "flex-start",
            margin: "12px 0"
          }}
        >
          <div
            style={{
              background: msg.from === "user" ? "#13734f" : "#ff6c02",
              color: msg.from === "user" ? "#fff" : "#fff",
              borderRadius: 18,
              borderBottomRightRadius: msg.from === "user" ? 0 : 18,
              borderBottomLeftRadius: msg.from === "user" ? 18 : 0,
              padding: "12px 16px",
              fontSize: "1.09rem",
              maxWidth: "80%",
              minWidth: 60,
              lineHeight: 1.45,
              wordBreak: "break-word",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            }}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
}
