import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello. I am the Raspuino AI assistant. Ask me about our edge computing solutions or deployment infrastructure.' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show proactive greeting after 3 seconds
    const timer = setTimeout(() => {
      if (!isOpen) setShowGreeting(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setShowGreeting(false);
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    // Prepare history for API
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    try {
      const response = await sendMessageToGemini(userMsg, history);
      setMessages(prev => [...prev, { role: 'model', text: response || 'No response generated.' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Error connecting to service.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Proactive Greeting Bubble */}
      {!isOpen && showGreeting && (
        <div className="mb-4 mr-2 bg-white text-black text-sm px-4 py-3 rounded-xl rounded-tr-none shadow-xl border border-gray-200 animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-[200px]">
          <p className="font-medium">👋 Need help optimizing your edge devices?</p>
          <button 
            onClick={() => setShowGreeting(false)}
            className="absolute -top-2 -left-2 bg-gray-900 text-white rounded-full p-1 hover:bg-black"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white text-black p-4 rounded-full shadow-lg shadow-white/5 hover:scale-105 transition-all duration-200 flex items-center justify-center group"
        >
          <MessageSquare className="h-6 w-6 group-hover:rotate-12 transition-transform" />
        </button>
      )}

      {isOpen && (
        <div className="glass-panel w-80 sm:w-96 rounded-2xl shadow-2xl flex flex-col h-[500px] overflow-hidden border border-gray-700 animate-in fade-in slide-in-from-bottom-4 duration-200 bg-black/90">
          {/* Header */}
          <div className="bg-gray-900/50 p-4 border-b border-gray-800 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5 text-white" />
              <span className="font-semibold text-sm text-white">Raspuino Assistant</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/40">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                    msg.role === 'user'
                      ? 'bg-white text-black font-medium'
                      : 'bg-gray-800 text-gray-200 border border-gray-700'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 rounded-lg px-3 py-2 border border-gray-700">
                  <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 bg-gray-900/50 border-t border-gray-800 flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 bg-gray-950 border border-gray-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-white/50 transition-colors placeholder-gray-600"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-white text-black p-2 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};