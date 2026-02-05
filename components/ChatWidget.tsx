
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { services, pricingPlans, stats } from '../constants';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Hello! I'm the Geez Digital Assistant. How can I help you elevate your brand's visual story today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Persistent chat session ref to maintain context
  const chatSessionRef = useRef<any>(null);

  const systemInstruction = `
    You are the Geez Digital AI Concierge. You are professional, creative, and highly helpful. 
    Geez Digitals is a premium digital agency in Addis Ababa, Ethiopia.
    
    KEY INFO:
    - Services: ${services.map(s => s.title).join(', ')}.
    - Location: Bole KKare Building, 2nd Floor, Addis Ababa.
    - Hotline: +251 92 298 1639.
    - Stats: ${stats.map(s => `${s.value} ${s.label}`).join(', ')}.
    - Pricing: ${pricingPlans.map(p => `${p.name} at ${p.price}`).join(', ')}.
    
    TONE:
    - Premium, cinematic, and welcoming.
    - Concise. Keep initial answers brief.
    - Always offer human connection via Hotline (+251 92 298 1639) for serious inquiries.
  `;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const initChat = () => {
    if (!chatSessionRef.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatSessionRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });
    }
    return chatSessionRef.current;
  };

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    try {
      const chat = initChat();
      
      // Add an empty AI message that we will populate via streaming
      setMessages(prev => [...prev, { role: 'ai', text: '' }]);
      
      const stream = await chat.sendMessageStream({ message: userMessage });
      let fullText = '';

      for await (const chunk of stream) {
        const part = chunk as GenerateContentResponse;
        const textChunk = part.text;
        if (textChunk) {
          fullText += textChunk;
          // Update the last message (the AI's current streaming bubble)
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = { role: 'ai', text: fullText };
            return newMessages;
          });
        }
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [
        ...prev.slice(0, -1), // Remove the empty/failed bubble
        { role: 'ai', text: "I'm having a small technical moment. Feel free to reach us directly on Telegram @geezdigitals!" }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[200]">
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(234,179,8,0.5)] hover:scale-110 transition-all duration-300 active:scale-95"
      >
        {isOpen ? (
          <span className="text-black text-3xl font-light">×</span>
        ) : (
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[90vw] md:w-[420px] h-[600px] glass rounded-[3rem] border border-white/10 flex flex-col overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] animate-reveal origin-bottom-right">
          {/* Header */}
          <div className="p-7 bg-yellow-500 flex items-center justify-between">
            <div className="flex items-center space-x-4 text-black">
              <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center font-black text-xl shadow-lg">G</div>
              <div>
                <h4 className="font-black text-sm uppercase tracking-[0.2em]">GEEZ CONCIERGE</h4>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">AI Power Live</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-black/50 hover:text-black transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="flex-grow p-6 overflow-y-auto space-y-6 scroll-smooth bg-black/40"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-reveal`}>
                <div className={`max-w-[88%] p-5 rounded-[1.5rem] text-sm leading-relaxed shadow-xl ${
                  msg.role === 'user' 
                    ? 'bg-yellow-500 text-black font-semibold rounded-tr-none' 
                    : 'bg-white/5 text-gray-100 border border-white/10 rounded-tl-none backdrop-blur-md'
                }`}>
                  {msg.text || (msg.role === 'ai' && <span className="inline-block w-2 h-4 bg-gray-400 animate-pulse"></span>)}
                </div>
              </div>
            ))}
            {isTyping && messages[messages.length-1].text === '' && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-5 rounded-[1.5rem] rounded-tl-none flex space-x-2 items-center border border-white/5">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-black/60 border-t border-white/5 backdrop-blur-xl">
            <div className="flex items-center space-x-3 bg-white/5 rounded-2xl p-1 border border-white/10 focus-within:border-yellow-500/50 transition-all">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about pricing or services..."
                className="flex-grow bg-transparent px-5 py-4 text-sm text-white outline-none placeholder:text-gray-600"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping || !input.trim()}
                className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center text-black hover:bg-yellow-400 transition-all disabled:opacity-20 disabled:grayscale"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
            <p className="text-[9px] text-center text-gray-600 mt-3 font-bold tracking-[0.2em] uppercase">Powered by Gemini Pro AI</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
