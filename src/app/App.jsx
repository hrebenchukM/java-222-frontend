import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import AppContext from '../features/appContext/AppContext';
import Base64 from '../shared/base64/Base64';

// public
import SplashPage from '../pages/splash/Splash';
import LandingPage from '../pages/landing/Landing';
import AuthPage from '../pages/auth/Auth';

// app
import Layout from './ui/Layout';
import HomePage from '../pages/home/HomePage';
import Profile from '../pages/profile/Profile';

export default function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState({ cartItems: [] });

  // ===== REQUEST (как у препода)
  const request = (url, conf = {}, isFull = false) =>
    new Promise((resolve, reject) => {
      const backUrl = 'http://localhost:8080/JavaWeb222/';
      url = url.replace('api://', backUrl);

      if (token) {
        conf.headers ??= {};
        conf.headers.Authorization ??= 'Bearer ' + token;
      }

      fetch(url, conf)
        .then(r => r.json())
        .then(j => {
          if (j.status?.isOk) resolve(isFull ? j : j.data);
          else reject(j);
        })
        .catch(reject);
    });

  // ===== USER FROM JWT
  useEffect(() => {
    if (token) {
      const payload = Base64.jwtDecodePayload(token);
      setUser({
        id: payload.sub,
        aud: payload.aud,
        email: payload.email,
        name: payload.name,
        dob: payload.dob ?? null,
      });
    } else {
      setUser(null);
    }
  }, [token]);

  return (
    <AppContext.Provider
      value={{ token, setToken, user, cart, setCart, request }}
    >
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<SplashPage />} />

          {/* PUBLIC */}
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />

          {/* PROTECTED APP */}
          <Route
            path="/app"
            element={token ? <Layout /> : <Navigate to="/landing" />}
          >
            <Route index element={<HomePage />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* FALLBACK */}
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
