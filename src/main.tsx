import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Routes from './routes';

import './config/i18n';

import "./styles/global.scss";
import { LanguageProvider } from './context/Translation';
import { BabyProvider } from './context/Global/avatar';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <BabyProvider>
        <Routes />
      </BabyProvider>
    </LanguageProvider>
  </StrictMode>,
)
