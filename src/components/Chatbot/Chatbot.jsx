"use client";
import { useState, useRef, useEffect } from 'react';
import styles from './Chatbot.module.scss';
import { HiPaperAirplane, HiChatBubbleLeftRight, HiXMark } from 'react-icons/hi2';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Salam! Mən Kaye. Sizə necə kömək  edə bilərəm?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg = { id: Date.now(), text: inputValue, sender: "user" };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputValue }),
      });
      const data = await res.json();
      
      setMessages(prev => [...prev, { id: Date.now() + 1, text: data.reply, sender: "bot" }]);
    } catch (error) {
      setMessages(prev => [...prev, { id: Date.now() + 1, text: "Xəta baş verdi, yenidən yoxlayın.", sender: "bot" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatWrapper}>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.header}>
            <h4>Kredit Evi AI</h4>
            <span onClick={() => setIsOpen(false)}><HiXMark size={22} /></span>
          </div>

          <div className={styles.messages} ref={scrollRef}>
            {messages.map(msg => (
              <div key={msg.id} className={`${styles.msg} ${styles[msg.sender]}`}>
                {msg.text}
              </div>
            ))}
            {isLoading && <div className={`${styles.msg} ${styles.bot}`}>yazır...</div>}
          </div>

          <div className={styles.inputArea}>
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Sualınızı yazın..."
              disabled={isLoading}
            />
            <button onClick={handleSend} disabled={isLoading}>
              <HiPaperAirplane />
            </button>
          </div>
        </div>
      )}
      <div className={styles.chatButton} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiXMark size={30} /> : <HiChatBubbleLeftRight size={30} />}
      </div>
    </div>
  );
};

export default Chatbot;