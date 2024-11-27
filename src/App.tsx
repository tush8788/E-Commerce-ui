import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './routes'

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </NextUIProvider>
  )
}

export default App
