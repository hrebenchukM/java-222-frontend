import React, { useContext, useMemo } from 'react';
import { Home, Users, Briefcase, MessageCircle, Bell } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppContext from '../../features/appContext/AppContext';
import AuthModal from './AuthModal';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, user, setToken } = useContext(AppContext);

  const isActive = (path) => location.pathname === path;

  const totalItems = useMemo(() => {
    if (!cart?.cartItems) return 0;
    return cart.cartItems.reduce((s, ci) => s + (ci.quantity || 0), 0);
  }, [cart]);

  const profileTitle = useMemo(() => {
    if (!user) return '';
    let t = user.email ?? '';
    if (user.dob) {
      const b = new Date(user.dob);
      const now = new Date();
      let next = new Date(now.getFullYear(), b.getMonth(), b.getDate());
      if (next < now) next.setFullYear(next.getFullYear() + 1);
      const diff = Math.ceil((next - now) / (1000 * 60 * 60 * 24));
      t += `\nДата народження: ${b.toLocaleDateString()}`;
      t += `\nДо дня народження: ${diff} днів`;
    }
    return t;
  }, [user]);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">

            <div className="header-left">
              <div className="logo" onClick={() => navigate('/')}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="6" fill="white" />
                  <path d="M10 22V13H13V22H10Z" fill="#7C3AED" />
                  <path d="M15 22V10H18V22H15Z" fill="#7C3AED" />
                  <path d="M20 22V16H23V22H20Z" fill="#7C3AED" />
                </svg>
              </div>

              <div className="search-box">
                <input type="text" placeholder="Search" className="search-input" />
              </div>
            </div>

            <nav className="header-nav">

              <button
                onClick={() => navigate('/')}
                className={`nav-item ${isActive('/') ? 'active' : ''}`}
              >
                <Home size={20} />
                <span>Home</span>
              </button>

              <button className="nav-item">
                <Users size={20} />
                <span>Network</span>
              </button>

              <button className="nav-item">
                <Briefcase size={20} />
                <span>Vacancies</span>
              </button>

              <button className="nav-item">
                <MessageCircle size={20} />
                <span>Messages</span>
              </button>

              <button className="nav-item">
                <Bell size={20} />
                <span>Notifications</span>
              </button>

              {!user ? (
                <button
                  className="nav-item profile-item"
                  data-bs-toggle="modal"
                  data-bs-target="#authModal"
                >
                  Login
                </button>
              ) : (
                <>
                  <button
                    className={`nav-item profile-item ${isActive('/profile') ? 'active' : ''}`}
                    title={profileTitle}
                    onClick={() => navigate('/profile')}
                  >
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                      className="nav-profile-img"
                    />
                    <span>My profile</span>
                  </button>

                  <button
                    className="nav-item"
                    title={`Товарів: ${totalItems}\nСума: ₴${cart?.price?.toFixed(2) ?? '0.00'}`}
                    onClick={() => navigate('/cart')}
                  >
                    🛒 {cart?.cartItems?.length || 0}
                  </button>

                  <button
                    className="nav-item"
                    onClick={() => setToken(null)}
                    title="Logout"
                  >
                    ⎋
                  </button>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>

      <AuthModal />
    </>
  );
};

export default Header;
