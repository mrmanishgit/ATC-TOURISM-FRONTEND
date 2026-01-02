import React, { useState, useRef, useEffect } from "react";
//import axios from "axios";
//import logo from "/assets/logo.png";
import logo from "../assets/logo2.png";
import api from "../api/api";

const TourismChatbot = () => {
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(true); // ✅ FIXED
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 Welcome to AJA Tourism! How can I help you?" }
  ]);
  const [input, setInput] = useState("");
  const [faqs, setFaqs] = useState([]);

  const chatRef = useRef(null);
  const messagesEndRef = useRef(null);

  /* ===== AUTO SCROLL ===== */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* ===== FETCH FAQ ===== */
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/api/chatbotfaq/all")
  //     .then((res) => setFaqs(res.data))
  //     .catch(console.error);
  // }, []);
  useEffect(() => {
  api.get("/api/chatbotfaq/all")
    .then(res => setFaqs(res.data))
    .catch(console.error);
}, []);

  /* ===== OUTSIDE CLICK CLOSE ===== */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (chatRef.current && !chatRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  /* ===== SEND MESSAGE ===== */
  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    const msg = input.toLowerCase().replace(/[^\w\s]/g, "");
    const userWords = msg.split(" ");

    let botReply =
      "Sorry, I didn’t understand. You can ask about Hyderabad places, packages, food, or best time.";

    if (["hi", "hello", "hey", "hii"].includes(msg)) {
      botReply =
        "Hi 😊 You can ask me about Charminar, Golconda Fort, Ramoji Film City, best time to visit Hyderabad, food, packages or contact us.";
    } else {
      for (let faq of faqs) {
        const key = faq.question.toLowerCase();
        if (userWords.includes(key)) {
          botReply = faq.answer;
          break;
        }
      }
    }

    setMessages([...messages, userMsg, { from: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <>
      {/* 🔔 ANIMATION */}
      <style>{`
        @keyframes bounce {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      {/* CHAT ICON + HIGHLIGHT */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9999
        }}
      >
        {/* 🔔 HIGHLIGHT MESSAGE */}
        {showHint && !open && (
  <div
    style={{
      position: "absolute",
      right: "70px",        // ✅ MOVE TO LEFT SIDE
      bottom: "12px",
      background: "#0d6efd",
      color: "#fff",
      padding: "6px 12px",
      borderRadius: "12px",
      fontSize: "12px",
      whiteSpace: "nowrap",
      animation: "bounce 1.5s infinite",
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
    }}
  >
    👋 Need Help?
  </div>
)}

      

        {/* 💬 CHAT BUTTON */}
        <div
          onClick={() => {
            setOpen(!open);
            setShowHint(false); // ✅ hide hint after click
          }}
          style={{
            width: "55px",
            height: "55px",
            background: "#0d6efd",
            color: "#fff",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
            cursor: "pointer"
          }}
        >
          💬
        </div>
      </div>

      {/* CHAT WINDOW */}
      {open && (
        <div
          ref={chatRef}
          style={{
            position: "fixed",
            bottom: "85px",
            right: "20px",
            width: "330px",
            height: "460px",
            background: "#fff",
            borderRadius: "14px",
            boxShadow: "0 10px 35px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            fontFamily: "Arial",
            zIndex: 9999
          }}
        >
          {/* HEADER */}
          
              <div
                style={{
                  background: "#0d6efd",
                  color: "#fff",
                  padding: "8px 10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                  whiteSpace: "nowrap"
                }}
              >
                <img
                  src={logo}
                  alt="ATC"
                  style={{
                    height: "32px",
                    width: "32px",
                    objectFit: "contain",
                    flexShrink: 0
                  }}
                />
                <span
                    style={{
                      fontWeight: "600",
                      fontSize: "15px",
                      lineHeight: "1",
                      whiteSpace: "nowrap",
                      color: "#ffffff"
                    }}
                  >
                    ATC Tourism Assistant
                  </span>

              </div>


          {/* MESSAGES */}
          <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  textAlign: m.from === "user" ? "right" : "left",
                  marginBottom: "8px"
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: "14px",
                    maxWidth: "80%",
                    fontSize: "13px",
                    background:
                      m.from === "user" ? "#dcf8c6" : "#f1f1f1"
                  }}
                >
                  {m.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* INPUT */}
          <div style={{ display: "flex", borderTop: "1px solid #ddd", padding: "6px" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              style={{ flex: 1, border: "none", outline: "none", padding: "8px", fontSize: "13px" }}
            />
            <button
              onClick={handleSend}
              style={{
                background: "#0d6efd",
                color: "#fff",
                border: "none",
                padding: "0 14px",
                cursor: "pointer",
                borderRadius: "6px"
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TourismChatbot;
