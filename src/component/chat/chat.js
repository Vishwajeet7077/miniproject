import React, { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md">
      <div className="h-60 overflow-y-auto scrollbar-hide">
        <div>UserName</div>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.sender === "user" ? "text-right" : "text-left"
            } p-2`}
          >
            <div
              className={`${
                message.sender === "user"
                  ? "bg-[#ffff] text-black rounded-tl"
                  : "bg-gray-300 rounded-tr"
              } p-2 rounded-md`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex">
        <input
          type="text"
          className="flex-1 p-2 rounded-md border border-gray-400"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white p-2 rounded-md ml-2"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
