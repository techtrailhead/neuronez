"use client";

import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { chatWithCounselor } from '@/services/assistantService';
import { ChatMessage } from '@/types/aixcelerators';

export const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "GENLOOPERS_PROTOCOL_ONLINE. I am the Keeper. Inquire about the training parameters or ask me to visualize a concept." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await chatWithCounselor(userMsg.text, history);
    
    const modelMsg: ChatMessage = { 
      role: 'model', 
      text: response.text,
      image: response.image 
    };
    
    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end font-mono">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="w-[360px] h-[600px] bg-black border border-magma-500 shadow-[0_0_50px_rgba(249,115,22,0.2)] flex flex-col overflow-hidden mb-6 animate-fade-in-up relative">
          
          {/* Scanlines */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] z-10 opacity-20"></div>
          
          {/* Header */}
          <div className="bg-stone-900 p-4 flex items-center justify-between border-b border-magma-900 relative z-20">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-magma-500 rounded-full animate-pulse"></div>
              <span className="text-magma-500 font-bold tracking-widest text-sm">TACTICAL_ASSIST</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-stone-500 hover:text-magma-500 transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-bg-950 relative z-20">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <span className="text-[10px] text-stone-600 mb-1 uppercase tracking-wider">
                    {msg.role === 'user' ? 'OPERATOR' : 'SYSTEM'}
                </span>
                <div className={`max-w-[90%] p-4 border text-sm font-medium ${
                  msg.role === 'user' 
                    ? 'bg-stone-900 border-stone-700 text-stone-300' 
                    : 'bg-magma-900/20 border-magma-500/50 text-magma-400'
                }`}>
                  {msg.text}
                  {msg.image && (
                    <div className="mt-3 rounded-sm overflow-hidden border border-magma-500/30">
                      <img src={msg.image} alt="Generated visualization" className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start flex-col">
                 <span className="text-[10px] text-stone-600 mb-1 uppercase tracking-wider">SYSTEM</span>
                 <div className="text-magma-500 text-sm animate-pulse">PROCESSING_REQUEST...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-black border-t border-stone-800 relative z-20 flex gap-2">
            <div className="text-magma-500 py-2">{'>'}</div>
            <input 
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              className="flex-1 bg-transparent text-white focus:outline-none font-mono text-sm placeholder-stone-700"
              placeholder="ENTER COMMAND..."
            />
            <button 
              onClick={handleSend}
              className="text-stone-500 hover:text-magma-500 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <a
          href="https://wa.me/+918951520352?text=Hey!%20I%20am%20interested%20to%20know%20more%20about%20the%20program"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="group flex items-center justify-center w-16 h-16 bg-magma-600 text-white hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.4)] clip-path-hexagon"
          style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}
        >
          <MessageSquare size={24} />
        </a>
      )}
    </div>
  );
};
