import React, { createContext, useContext, useReducer } from 'react';
import type { PortfolioState, Action } from '../Types';

const initialState: PortfolioState = {
  isMobileMenuOpen: false,
  isScrolled: false,
  isDarkMode: true,
  chatMessages: [{ role: 'assistant', text: "Hi! I'm Rizki's AI Assistant. Ask me anything about his skills or experience!" }],
  isChatOpen: false,
  isChatLoading: false,
};

const portfolioReducer = (state: PortfolioState, action: Action): PortfolioState => {
  switch (action.type) {
    case 'TOGGLE_MOBILE_MENU':
      return { ...state, isMobileMenuOpen: !state.isMobileMenuOpen };
    case 'SET_SCROLLED':
      return { ...state, isScrolled: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, isDarkMode: !state.isDarkMode };
    case 'TOGGLE_CHAT':
      return { ...state, isChatOpen: !state.isChatOpen };
    case 'ADD_CHAT_MESSAGE':
      return { ...state, chatMessages: [...state.chatMessages, action.payload] };
    case 'SET_CHAT_LOADING':
      return { ...state, isChatLoading: action.payload };
    default:
      return state;
  }
};

const PortfolioContext = createContext<{
  state: PortfolioState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

// eslint-disable-next-line react-refresh/only-export-components
export const usePortfolio = () => useContext(PortfolioContext);

export const PortfolioProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(portfolioReducer, initialState);
  return (
    <PortfolioContext.Provider value={{ state, dispatch }}>
      {children}
    </PortfolioContext.Provider>
  );
};