import React, { useEffect, useState } from "react";
import axios from "axios";
const ChatPage = () => {
  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");
    // console.log(data);
    setChats(data);
  };
  const [chats, setChats] = useState([]);
  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      <h1>Chat Page</h1>
      {
        chats.map(
          (chat) => (
          <div key={chat._id}>{chat.chatName}</div>
            )
        )
      }
    </div>
  );
};

export default ChatPage;
