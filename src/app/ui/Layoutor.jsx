import { Link, Outlet } from "react-router-dom";
import Base64 from "../../shared/base64/Base64";
import { useContext, useRef } from "react";
import AppContext from "../../features/appContext/AppContext";
import AuthModal from "./AuthModal";

export default function Layout() {
    const {cart,user, setToken} = useContext(AppContext);

const totalItems = (() => {
        if (!cart?.cartItems) return 0;
        let s = 0;
        for (const ci of cart.cartItems) {
            s += ci.quantity || 0;
        }
        return s;
    })();
    console.log("Layout render", {cart,user});
    return <>
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Frontend-222</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex justify-content-between w-100" >
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/privacy">Privacy</Link>
                                </li>
                                {!!user && <li className="nav-item">
                                    <Link className="nav-link active" to="/admin">Admin</Link>
                                </li>}
                            </ul>
                            <form className="d-flex" role="search" onSubmit={e => e.preventDefault()}>
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                           <div className="nav-auth-block">
                                {!user 
                                ? <>
                                  <button className="btn btn-outline-secondary" 
                                        data-bs-toggle="modal" data-bs-target="#authModal">
                                    <i className="bi bi-box-arrow-in-right"></i>
                                  </button>
                                </>
                                : 
                                <> 
                                <Link to="/profile"title={
                                 (() => {
                                  let t = user.email;
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
                                    })()
                                    }
                                    className="link-to-profile v-center ">
                                 {(user?.name?.[0] ?? user?.aud?.[0] ?? '?').toUpperCase()}
                                </Link>

                                 <Link
                                    to="/cart"
                                    className="btn btn-outline-success me-3 cart-btn-layout"
                                    title={
      !cart?.cartItems?.length
        ? "🛒 У кошику немає товарів"
        : `🛒 Кошик
Позицій:  ${cart?.cartItems?.length || 0}
Товарів:  ${totalItems}
Сума:     ₴${cart?.price?.toFixed(2) ?? "0.00"}
→ Натисніть для оформлення`
    }
                                            >
                                                
                                  <i className="bi bi-cart"></i>
                                  <span> {cart?.cartItems?.length || 0}</span>

                                  <div style={{ fontSize: "0.8rem", lineHeight: "1" }}>
                                   ₴{cart?.price?.toFixed(2) ?? "0.00"}
                                  </div>
                                  
                                </Link>
                             

                                  <button className="btn btn-outline-secondary" 
                                          onClick={() => setToken(null)}>
                                    <i className="bi bi-box-arrow-right"></i>
                                  </button>
                                </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <main>
            <div className="container">
                <Outlet />
            </div>            
        </main>

        <footer className="bg-body-tertiary border-top py-3">
            <div className="container">
                &copy; 2025, IT STEP University
            </div>
        </footer>

        <AuthModal />        
    </>;
}