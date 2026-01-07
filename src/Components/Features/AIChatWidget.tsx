import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, MessageSquare, Loader2 } from 'lucide-react';
import { usePortfolio } from '../../Context/PortfolioContext';
import { API_KEY, RESUME_DATA } from '../../Data/Constants';

const AIChatWidget = () => {
  const { state, dispatch } = usePortfolio();
  const { isChatOpen, chatMessages, isChatLoading, isDarkMode } = state;
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => { scrollToBottom(); }, [chatMessages, isChatOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = input;
    setInput('');
    dispatch({ type: 'ADD_CHAT_MESSAGE', payload: { role: 'user', text: userMessage } });
    dispatch({ type: 'SET_CHAT_LOADING', payload: true });

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `You are a helpful AI assistant for a developer portfolio. Context: ${RESUME_DATA}. User Question: ${userMessage}. Answer politely, concisely (max 3 sentences).`
              }]
            }]
          })
        }
      );
      const data = await response.json();
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I'm having trouble connecting.";
      dispatch({ type: 'ADD_CHAT_MESSAGE', payload: { role: 'assistant', text: aiResponse } });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      dispatch({ type: 'ADD_CHAT_MESSAGE', payload: { role: 'assistant', text: "Oops, something went wrong." } });
    } finally {
      dispatch({ type: 'SET_CHAT_LOADING', payload: false });
    }
  };

  const widgetBg = isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200 shadow-xl';
  const headerBg = isDarkMode ? 'bg-emerald-600' : 'bg-emerald-500';
  const chatTextAssistant = isDarkMode ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-800';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isChatOpen && (
        <div className={`mb-4 w-80 sm:w-96 border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 ${widgetBg}`}>
          <div className={`${headerBg} p-4 flex justify-between items-center text-white`}>
            <div className="flex items-center gap-2 font-medium"><Bot className="w-5 h-5" /><span>Ask AI about Rizki</span></div>
            <button onClick={() => dispatch({ type: 'TOGGLE_CHAT' })}><X className="w-5 h-5" /></button>
          </div>
          <div className={`flex-1 h-80 overflow-y-auto p-4 space-y-4 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
            {chatMessages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-emerald-500 text-white rounded-tr-sm' : `${chatTextAssistant} rounded-tl-sm`}`}>{msg.text}</div>
              </div>
            ))}
            {isChatLoading && <Loader2 className={`w-4 h-4 animate-spin ${isDarkMode ? 'text-white' : 'text-slate-800'}`} />}
            <div ref={messagesEndRef} />
          </div>
          <div className={`p-3 border-t ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
            <div className="flex gap-2">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask about skills..." className={`flex-1 text-sm rounded-lg px-3 py-2 border focus:outline-none focus:border-emerald-500 ${isDarkMode ? 'bg-slate-900 text-white border-slate-700' : 'bg-slate-50 text-slate-900 border-slate-200'}`} />
              <button onClick={handleSend} disabled={isChatLoading || !input.trim()} className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-lg"><Send className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      )}
      <button onClick={() => dispatch({ type: 'TOGGLE_CHAT' })} className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg hover:scale-110 transition-all duration-300 animate-bounce-slow">
        {isChatOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default AIChatWidget;