import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/GlobalStyle.js'
import { SideBar } from './components/SideBar'
import { RouterProvider } from 'react-router-dom'
import { route } from './routes'
import { ThemeProvider } from 'styled-components'
import { theme } from './assets/theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
          <SideBar/>
          <RouterProvider router={route}/>
      </ThemeProvider>
  </React.StrictMode>,
)
