import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import App from './App'
import GlobalStyle from '../GlobalStyles'

const AppLauncher = () =>(
<>
    <GlobalStyle/>
    <App />
  </>
)
const container = document.getElementById('root')!
const root = ReactDOMClient.createRoot(container)
root.render(<AppLauncher/>)
