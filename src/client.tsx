import React from 'react'
import { createRoot } from 'react-dom/client'
import WebApp from './WebApp'

const container = document.getElementById('app')

createRoot(container).render(<WebApp />)