import React from 'react'
import {HelmetProvider} from 'react-helmet-async'
import {Router} from './Router'

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  )
}
