import 'virtual:windi.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';
import { MiddlewareInit } from './middleware';

const StrictMode = (props: { children: React.ReactNode }) => {
  if (import.meta.env.VITE_DEBUG_IS_STRICT_MODE == 'true') {
    console.log('Strict Mode');
    return <React.StrictMode>{props.children}</React.StrictMode>;
  }

  return <>{props.children}</>;
};

(async () => {
  await MiddlewareInit({ i18n: { resource: App.i18nList } });

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
      <App.jsx />
    </StrictMode>,
  );
})();
