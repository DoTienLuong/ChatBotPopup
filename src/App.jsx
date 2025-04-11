import { useState } from "react";
import ChatbotIcon from "./Component/ChatbotIcon";
import ChatForm from "./Component/ChatForm";
import ChatMessage from "./Component/ChatMessage";

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const genarateBotResponse = (history) => {
    console.log(history);
  }

  return (
    <div className="container">
      <div className="chatbot_popup">
        {/* Header */}
        <div className="chat_header">
          <div className="header_info">
            <ChatbotIcon />
            <h2 className="logo_text">Chat bot</h2>
          </div>
          <button>
              <span className="material-symbols-rounded">
                keyboard_arrow_down
              </span>
            </button>
        </div>

        {/* Body */}
        <div className="chat_body">
          <div className="message bot_message">
            <ChatbotIcon />
            <p className="message_text">
              Hey there <br /> How can I help you today?
            </p>
          </div>
          {/* Tu dong render chat:  */}
          {chatHistory.map((chat, index)=>(
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* footer */}
        <div className="footer">
          <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} genarateBotResponse={genarateBotResponse} />

        </div>
      </div>
    </div>
  );
}

export default App;
