import React from 'react'
import ReactDOM from 'react-dom/client'
import { PdfTextsProvider } from './contexts/PdfTextsContext';
import AppRouets from './AppRoutes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PdfTextsProvider>
      <AppRouets />
    </PdfTextsProvider>
  </React.StrictMode>,
)
