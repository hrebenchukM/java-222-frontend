import { Link, useNavigate } from "react-router-dom";  // ✅ ДОДАНО useNavigate!
import AppContext from "../../../features/appContext/AppContext";
import { useContext } from "react";

export default function ProductCard({ product }) {

    const { cart, user, request, updateCart } = useContext(AppContext);
    const navigate = useNavigate(); 

    
    const addToCartClick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (user == null) {
            alert("Користувач не авторизований!");
            return;
        }

        request("api://cart?product-id=" + product.id, {
            method: "POST",
        })
            .then(updateCart)
            .then(() => {
                alert(`Товар "${product.name}" додано до кошика!`);
                console.log(product.id);
            })
            .catch((err) => {
                console.error(err);
                alert("Помилка при додаванні до кошика!");
            });
    };

    const goToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigate("/cart");
    };

    const inCart = cart?.cartItems?.some(ci => ci.product.id === product.id);

    return (
        <div className="col" key={product.id}>
            <Link className="h-100 nav-link" to={"/product/" + (product.slug || product.id)}>
                <div className="card h-100">
                    <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <span>₴{product.price.toFixed(2)}</span>

                        {inCart ? (
                            <button onClick={goToCart} className="btn btn-success">
                                <i className="bi bi-cart-check"></i> У кошику
                            </button>
                        ) : (
                            <button onClick={addToCartClick} className="btn btn-outline-success">
                                <i className="bi bi-cart-plus"></i> Додати
                            </button>
                        )}
                    </div>
                </div>
            </Link>
        </div>
    );
}
