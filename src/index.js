import React from 'react'
import ReactDOM from 'react-dom'
import App from './core/App'
import * as serviceWorker from './core/serviceWorker'
import './global.css'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()
