import React from 'react'
import { hydrate } from 'react-dom'
import App from '../shared/App'


hydrate(
    <App name='Daniel'/>,
    document.getElementById('app')
)