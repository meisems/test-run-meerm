import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AdminApp from './MetroEventsAdmin_v23.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminApp />
  </StrictMode>
)
