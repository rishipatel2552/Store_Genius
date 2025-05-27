import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendChatMessage, addUserMessage, clearChat } from "./ChatSlice";
import MessageList from "../../components/MessageList";
import MessageInput from "../../components/MessageInput";
import Header from "../../components/Header";
import { Box, Button } from "@mui/material";
import bgImg from '../../img/bg-img.png';


const ChatBot = () => {
  const { history, status } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  const handleSend = (msg) => {
    if (!msg.trim()) return;
    dispatch(addUserMessage(msg));
    dispatch(sendChatMessage(msg));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#f9f9f9",
        height: "100vh",
        width: "100%",
        margin: "0 auto",
        boxShadow: { xs: "none", md: 6 },
        borderRadius: 3,
        overflow: "hidden",
        position: "relative"
      }}
    >
      {/* Header */}
      <Box sx={{ py: 2, px: 2, bgcolor: "#fff", zIndex: 2 }}>
        <Header />
      </Box>
      {/* Chat area */}
      <Box
        ref={listRef}
        sx={{
          flex: 1,
          overflowY: "auto",
          px: { xs: 1, md: 4 },
          py: 3,
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",                      
          backgroundPosition: "center",                 
          backgroundRepeat: "no-repeat"  

        }}
      >
        <MessageList history={history} />
        {status === "loading" && (
          <Box sx={{ textAlign: "left", my: 2, color: "#009540" }}>
            <b>Bot:</b> Typing...
          </Box>
        )}
      </Box>
      {/* Input and Clear */}
      <Box
        sx={{
          bgcolor:  "#13734f",
          py: 2,
          px: 2,
          borderTop: "1px solidrgb(122, 117, 117)",
          display: "flex",
          alignItems: "center",
          gap: 1,
          m: 4,
          borderRadius: 5
        }}
      >
        <Box sx={{ flex: 1 }}>
          <MessageInput onSend={handleSend} disabled={status === "loading"} />
        </Box>
        <Button
          variant="outlined"
          color="success"
          sx={{
            fontWeight: "bold",
            borderRadius: "14px",
            ml: 1,
            px: 2,
            borderColor: "#fff",
            color: "#fff",
            minWidth: 90,
            "&:hover": {
              borderColor: "#f58220",
              color: "#f58220",
              bgcolor: "transparent"
            }
          }}
          onClick={() => dispatch(clearChat())}
        >
          Clear
        </Button>
      </Box>
    </Box>
  );
};

export default ChatBot;
