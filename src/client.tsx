/**
 * 
 *                   _        ___                   
 *                  | |      / __)                  
 *   ___ ____   ___ | |    _| |__ _____  ____ ____  
 *  /___)    \ / _ \| |   (_   __|____ |/ ___)    \ 
 * |___ | | | | |_| | |     | |  / ___ | |   | | | |
 * (___/|_|_|_|\___/ \_)    |_|  \_____|_|   |_|_|_|
 * 
 * 
 * neon runners web app.
 * 
 */

import React from 'react'
import { createRoot } from 'react-dom/client'
import WebApp from './WebApp'

// Render the web app
const container = document.getElementById('app') ?? document.createElement('div')
createRoot(container).render(<WebApp />)