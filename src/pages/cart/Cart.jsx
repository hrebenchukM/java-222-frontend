import { useContext } from "react";
import AppContext from "../../features/appContext/AppContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const { cart, updateCart, request } = useContext(AppContext);
    const navigate = useNavigate();

    const buyCartClick = () => {
        const totalItems = cart.cartItems.reduce((s, ci) => s + ci.quantity, 0);
        const totalPrice = cart.price?.toFixed(2) ?? "0.00";

        if (confirm(`Підтвердити покупку?\n\nТоварів: ${totalItems}\nСума: ₴${totalPrice}`)) {
            request(`api://cart`, { method: "PUT" })
                .then(() => {
                    updateCart();
                    alert("Дякуємо за покупку!");
                })
                .catch(err => {
                    console.error("Помилка покупки:", err);
                    alert("Операція не виконана, повторіть пізніше.");
                });
        }
    };

    const continueShoppingClick = () => {
        navigate("/");
    };

    const items = cart?.cartItems ?? [];

    return (
        <>
            <h1 className="fw-light fs-1 my-2">Мій кошик</h1>

            {(!cart || cart.cartItems.length === 0)
                ? (
                    <>
                        <EmptyCart />
                        <div className="mt-4">
                            <button onClick={continueShoppingClick} className="btn btn-primary">
                                Продовжити покупки
                            </button>
                        </div>
                    </>
                )
                : (
                    <>
                        <div className="row mb-3 bg-body-tertiary py-2 border-bottom">
                            <div className="col col-6">Товар</div>
                            <div className="col col-1">Ціна</div>
                            <div className="col col-3">Кількість</div>
                            <div className="col col-1">Сума</div>
                        </div>

                        {items.map(ci => <CartItem key={ci.id} cartItem={ci} />)}

                        <div className="row mb-3 bg-body-tertiary py-2">
                            <div className="v-center col col-7 text-end">Разом:</div>
                            <div className="v-center col col-3 text-center">
                                {cart.cartItems.reduce((s, ci) => s + ci.quantity, 0)}
                            </div>
                            <div className="v-center col col-1">{cart.price}</div>
                            <div className="col col-1">
                                <button
                                    onClick={buyCartClick}
                                    className="btn btn-outline-success"
                                    title="Оформити покупку"
                                >
                                    <i className="bi bi-cart-check"></i>
                                </button>
                            </div>
                        </div>

                        <div className="text-center mt-4">
                            <button onClick={continueShoppingClick} className="btn btn-primary">
                                Продовжити покупки
                            </button>
                        </div>
                    </>
                )}
        </>
    );
}

function CartItem({ cartItem }) {
    const { request, updateCart } = useContext(AppContext);

    const modify = (inc) => {
        request(`api://cart?cart-item-id=${cartItem.id}&inc=${inc}`, {
            method: "PATCH",
        })
            .then(updateCart)
            .catch(alert);
    };

    const deleteClick = () => {
        if (!confirm(`Видалити "${cartItem.product.name}" з кошика?`)) return;
        request(`api://cart?cart-item-id=${cartItem.id}`, {
            method: "DELETE",
        })
            .then(updateCart)
            .catch(alert);
    };

    const isMax = cartItem.quantity >= cartItem.product.stock;

    return (
        <div className="row mt-3 border-bottom pb-3">
            <div className="col col-1">
                <img className="w-100" src={cartItem.product.imageUrl} alt={cartItem.product.name} />
            </div>
            <div className="col col-5">
                <b className="fs-5">{cartItem.product.name}</b><br />
                <span className="text-muted fs-6">{cartItem.product.description}</span>
            </div>
            <div className="col col-1">{cartItem.product.price}</div>
            <div className="col col-3 text-center">
                <i onClick={() => modify(-1)} role="button" className="bi bi-dash-lg fs-5 me-2"></i>
                <div
                    style={{ display: "inline-flex", width: "2em", height: "2em" }}
                    className="border border-dark rounded-circle justify-content-center align-items-center"
                >
                    {cartItem.quantity}
                </div>
                <i
                    onClick={() => modify(1)}
                    role="button"
                    className={`bi bi-plus-lg fs-5 ms-2 ${isMax ? "text-secondary opacity-50" : ""}`}
                    style={{ pointerEvents: isMax ? "none" : "auto" }}
                    title={isMax ? "Максимальна кількість на складі" : "Додати ще"}
                />
            </div>
            <div className="col col-1">{cartItem.price}</div>
            <div className="text-center col col-1">
                <i onClick={deleteClick} role="button" className="bi bi-x-lg"></i>
            </div>
        </div>
    );
}

function EmptyCart() {
    return <p>Кошик порожній</p>;
}
