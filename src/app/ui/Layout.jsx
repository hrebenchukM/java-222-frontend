import { Link, Outlet } from "react-router-dom";
import './Layout.css';
import Base64 from "../../shared/base64/Base64";
import { useContext, useRef } from "react";
import AppContext from "../../features/appContext/AppContext";

export default function Layout() {
    const {cart,token, setToken} = useContext(AppContext);

const totalItems = (() => {
        if (!cart?.cartItems) return 0;
        let s = 0;
        for (const ci of cart.cartItems) {
            s += ci.quantity || 0;
        }
        return s;
    })();
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
                                {!!token && <li className="nav-item">
                                    <Link className="nav-link active" to="/admin">Admin</Link>
                                </li>}
                            </ul>
                            <form className="d-flex" role="search" onSubmit={e => e.preventDefault()}>
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            <div>
                                {!token 
                                ? <>
                                  <button className="btn btn-outline-secondary" 
                                        data-bs-toggle="modal" data-bs-target="#authModal">
                                    <i className="bi bi-box-arrow-in-right"></i>
                                  </button>
                                </>
                                : 
                                <> 
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

function AuthModal() {
    const { setToken} = useContext(AppContext);
    const closeButtonRef = useRef();

    const onAuthSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const login = formData.get("auth-login");
        const password = formData.get("auth-password");
        console.log(login, password);
        // RFC 7617
        const userPass = login + ':' + password;
        const credentials = Base64.encode(userPass);
        fetch("http://localhost:8080/JavaWeb222/user", {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + credentials,
            }
        }).then(r => {
            if(r.status == 200) {
                r.text().then(jwt => {
                    console.log(jwt);
                    setToken(jwt);
                    closeButtonRef.current.click();
                });
            }
            else {
                console.error("У вході відмовлено");
            }
        });
    };

    return <div className="modal fade" id="authModal" tabIndex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="authModalLabel">Вхід до сайту</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={onAuthSubmit} id="auth-form">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="login-addon"><i className="bi bi-key"></i></span>
                            <input name="auth-login" type="text" className="form-control" placeholder="Логін" aria-label="Логін" aria-describedby="login-addon"/>
                        </div>
                        
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="password-addon"><i className="bi bi-unlock2"></i></span>
                            <input name="auth-password" type="password" className="form-control" placeholder="Пароль" aria-label="Пароль" aria-describedby="password-addon"/>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button ref={closeButtonRef} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Скасувати</button>
                    <button type="submit" form="auth-form" className="btn btn-primary">Вхід</button>                    
                </div>
                </div>
            </div>
        </div>;
}