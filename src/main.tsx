import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@src/App.tsx'
import "@src/index.sass"
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />    
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
)
