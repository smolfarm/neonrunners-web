import React from 'react'
import ReactDOM from 'react-dom'
import WebApp from './WebApp'

// Render the frontend app in the wrapper div
ReactDOM.hydrate(
    <WebApp />,
    document.getElementById('app')
)