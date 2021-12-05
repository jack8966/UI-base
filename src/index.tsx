import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/tailwind.generated.css'

import IndexPage from './routes/indexPage'
import AutoNotification from './routes/autoNotification';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<IndexPage />}>
        <Route path='auto-notification' element={<AutoNotification />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
)
