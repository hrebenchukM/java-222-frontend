import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './ui/Layout';
import Home from '../pages/home/Home';
import Privacy from '../pages/privacy/privacy';
import { useState } from 'react';
import AppContext from '../features/appContext/AppContext';
import Admin from '../pages/Admin/Admin';

export default function App() {
  const [token,setToken] = useState(null);

  return (
    <AppContext.Provider value = {{token,setToken}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
             <Route path="admin" element={<Admin />} />
             <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  );
}
