import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './Signin'
import Signup from './Signup'
import Dashboard from './Dashboard'
import ErrorBoundry from './ErrorBoundry'

function App() {
   return (
    <ErrorBoundry>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ErrorBoundry>
  )
}

export default App
