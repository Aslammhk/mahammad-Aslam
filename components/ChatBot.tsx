
import React, { useState, useRef, useEffect } from 'react';
import { chatWithRestaurant } from '../services/geminiService';

interface ChatBotProps {
    t: (key: string) => string;
}

const ChatBot: React.FC<ChatBotProps> = ({ t }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{text: string, sender: 'user' | 'bot'}[]>([]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    
    // Keep track of history for the API
    const historyRef = useRef<{role: string, parts: {text: string}[]}[]>([]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (!inputText.trim()) return;
        
        const userMsg = inputText;
        setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
        setInputText('');
        setIsLoading(true);

        try {
            const response = await chatWithRestaurant(userMsg, historyRef.current);
            setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
            
            // Update history
            historyRef.current.push({ role: 'user', parts: [{ text: userMsg }] });
            historyRef.current.push({ role: 'model', parts: [{ text: response }] });
        } catch (e) {
            setMessages(prev => [...prev, { text: "Error connecting.", sender: 'bot' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-20 right-6 z-40 flex flex-col items-end">
            {isOpen && (
                <div className="bg-white w-80 h-96 rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden mb-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className="bg-red-600 p-4 text-white flex justify-between items-center">
                        <span className="font-bold">{t('chatWithUs')}</span>
                        <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20 rounded-full p-1">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <div className="flex-1 bg-gray-50 p-4 overflow-y-auto" ref={scrollRef}>
                        {messages.length === 0 && (
                            <div className="text-center text-gray-400 text-sm mt-10">
                                <p>👋 {t('askAnything')}</p>
                            </div>
                        )}
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`mb-3 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                                    msg.sender === 'user' 
                                    ? 'bg-red-600 text-white rounded-br-none' 
                                    : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                                }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start mb-2">
                                <div className="bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-500 animate-pulse">...</div>
                            </div>
                        )}
                    </div>
                    <div className="p-3 bg-white border-t border-gray-200 flex gap-2">
                        <input 
                            type="text" 
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder={t('askAnything')}
                            className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <button onClick={handleSend} className="bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition-colors">
                            <svg className="w-5 h-5 translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                        </button>
                    </div>
                </div>
            )}
            
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-500 transition-transform hover:scale-105 flex items-center justify-center"
            >
                {isOpen ? (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                )}
            </button>
        </div>
    );
};

export default ChatBot;
