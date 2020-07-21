import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from 'styles/global'
import * as serviceWorker from 'core/serviceWorker'
import App from 'core/App'
import theme from 'theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
)

serviceWorker.register()
