import React from 'react'
import { render } from 'react-dom'

import App from './App.jsx'

const app = document.getElementById("app")
app ? render(<App />, app) : false