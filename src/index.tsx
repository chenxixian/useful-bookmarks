import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { unregister } from './registerServiceWorker'

render(
  <App />,
  document.getElementById('root') as HTMLElement
)

unregister()
