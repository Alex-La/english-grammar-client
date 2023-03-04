import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import * as Page from '#page'

import {PageOverlay} from './overlay'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route errorElement={<p>Error...</p>} element={<PageOverlay />}>
          <Route index element={<Page.Test />} />
          <Route path="/list" element={<Page.List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
