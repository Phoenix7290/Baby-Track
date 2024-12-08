import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Router from './routes';

import { LanguageProvider } from './context/Translation/index.js';

import './config/i18n.js'

import "./styles/global.scss";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <Router />
    </LanguageProvider>
  </StrictMode>,
)
