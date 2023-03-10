import React from 'react'
import {HelmetProvider} from 'react-helmet-async'
import {Toaster} from 'react-hot-toast'
import {Router} from './Router'

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router />
      <Toaster position="top-right" />
    </HelmetProvider>
  )
}
