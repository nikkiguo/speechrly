import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material';

import ProjectPage from './pages/ProjectPage';
import TestPage from './pages/TestPage';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<ProjectPage />} />
            <Route path='test' element={<TestPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
