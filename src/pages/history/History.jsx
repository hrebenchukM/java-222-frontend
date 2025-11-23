import { useContext, useEffect, useState } from "react";
import { useParams ,useNavigate } from "react-router-dom";
import AppContext from "../../features/appContext/AppContext";

const _initialCart = {cartItems: []};

export default function History() {
    const {request, user, cart, updateCart} = useContext(AppContext);

    const {cartId} = useParams();
    const [_cart, _setCart] = useState(_initialCart);
    const navigate = useNavigate();

    useEffect(() => {
        if(user && cartId) {
            request("api://cart/" + cartId).then(data => {
                console.log(data);
                if(data) {
                    _setCart(data);
                }
                else {
                    _setCart(_initialCart);
                }
            });
        }
        else {
            _setCart(_initialCart);
        }
    }, [user, cartId]);


 const repeatClick = async () => {
    await updateCart();

    const freshCart = await request("api://cart");

    const hasActiveCart =
        freshCart && freshCart.cartItems && freshCart.cartItems.length > 0;

    let question = hasActiveCart
        ? "Вміст замовлення буде додано до вашого кошику. Продовжити?"
        : "Замовлення буде повторене. Продовжити?";

    if (!window.confirm(question)) return;

    request("api://cart/" + cartId, { method: "LINK" })
        .then(() => {
            updateCart();
            alert("Замовлення повторене");
            navigate("/cart");
        });
};

if (!user) {
    return (
        <div className="alert alert-danger mt-5 text-center">
            Для перегляду історії необхідно увійти до сайту
        </div>
    );
}

    return <>
        <h1 className="display-5 my-3">Історія покупки {_cart.createdAt}</h1>
        <div className="row">
          <div className="col offset-0 offset-lg-1 offset-xxl-2 col-12 col-lg-10 col-xxl-8">

      
        {_cart.cartItems.length > 0 && <>
            <div className="row mb-3 bg-body-tertiary border-bottom py-2">
                <div className="col col-7" >Товар </div>
                <div className="col col-2 text-center">Ціна</div>
                <div className="col col-1 text-center ">Кількість</div>
                <div className="col col-2 text-center">Сума</div>
            </div>
            {_cart.cartItems.map(cartItem => <div className="row mt-3 border-bottom pb-3">
                <div className="col col-2 ">
                    <img className="w-100" src={cartItem.product.imageUrl} alt={cartItem.product.name} />
                </div>
                <div className="col col-5">
                    <b className="fs-5">{cartItem.product.name}</b><br/>
                    <span className="text-muted fs-6">{cartItem.product.description}</span>
                </div>
                <div className="col col-2 text-center">{cartItem.product.price}</div>
                <div className="col col-1 text-center">{cartItem.quantity}</div>
                <div className="col col-2 text-center">{cartItem.price}</div>
            </div>)}
            <div className="row mb-3 bg-body-tertiary  py-2">
                <div className="v-center col col-2 ">
                    <button onClick={repeatClick} className="btn btn-outline-success" title="Повторити замовлення">
                        <i className="bi bi-repeat"></i>
                    </button></div>
                <div className="col col-5 "></div>
                <div className="v-center col col-2 text-center">Разом: </div>
                <div className="v-center col col-1 text-center">{_cart.cartItems.reduce((s, ci) => s + ci.quantity, 0)}</div>
                <div className="v-center col col-2 text-center">{_cart.price}</div>
               
            </div>
        </>}
              </div>
        </div>
    </>;
}