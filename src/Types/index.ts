import React from 'react';

export interface Project {
  id: number;
  title: string;
  type: 'Fullstack' | 'Frontend' | 'Backend';
  description: string;
  tech: string[];
  githubUrl: string;
}

export interface Skill {
  name: string;
  icon: React.ElementType; 
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
}

export interface PortfolioState {
  isMobileMenuOpen: boolean;
  isScrolled: boolean;
  isDarkMode: boolean;
  chatMessages: ChatMessage[];
  isChatOpen: boolean;
  isChatLoading: boolean;
}

export type Action =
  | { type: 'TOGGLE_MOBILE_MENU' }
  | { type: 'SET_SCROLLED'; payload: boolean }
  | { type: 'TOGGLE_THEME' }
  | { type: 'TOGGLE_CHAT' }
  | { type: 'ADD_CHAT_MESSAGE'; payload: ChatMessage }
  | { type: 'SET_CHAT_LOADING'; payload: boolean };