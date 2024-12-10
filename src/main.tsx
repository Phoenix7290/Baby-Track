import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Routes from './routes';

import './config/i18n';

import "./styles/global.scss";
import { LanguageProvider } from './context/Translation';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <Routes />
    </LanguageProvider>
  </StrictMode>,
)
