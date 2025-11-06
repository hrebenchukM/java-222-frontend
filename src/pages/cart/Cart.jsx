import { useContext } from "react";
import AppContext from "../../features/appContext/AppContext";


export default function Cart() {
    const { cart, updateCart } = useContext(AppContext);
    return <>
      <h1 className="fw-light fs-1 my-2"> Мій кошик</h1>

        {
            (!cart || cart.cartItems.length == 0)
            ? <EmptyCart />
            : <>
         <div className="row mb-3 py-2 bg-body-tertiary">
            <div className="col col-6">Товар </div>
            <div className="col col-1">Ціна</div>
            <div className="col col-3">Кількість</div>
            <div className="col col-1">Сума</div>
        </div>
               {cart.cartItems.map(ci => <CartItem key={ci.id} cartItem={ci} />)}

            </>
        }
    </>;
}


function CartItem({cartItem}) {
    const { request, updateCart } = useContext(AppContext);

    const modify = (inc) => {
        request(`api://cart?cart-item-id=${cartItem.id}&inc=${inc}`, {
            method: 'PATCH'
        })
        .then(updateCart)
        .catch(alert);
    };
    const decClick = () => {
       modify(-1);
    };
    const incClick = () => {
        modify(1);
    };
     const deleteClick = () => {
     console.log(cartItem.id,"deleted");
    };

    const isMax = cartItem.quantity >= cartItem.product.stock;


    return <div className="row mb-3 border-bottom pb-3">
        <div className="col col-1">
            <img className="w-100" src={cartItem.product.imageUrl} alt={cartItem.product.name} />
        </div>
        <div className="col col-5">
          <b className="fs-5"> {cartItem.product.name}</b><br/>
            <span className="text-muted fs-6">{cartItem.product.description}</span>    </div>
        <div className="col col-1">
            {cartItem.product.price}
        </div>
    <div className="col col-3 text-center">
     <i onClick={decClick} role="button"  className="bi bi-dash-lg fs-5 me-2"></i>
    <div style={{ display: "inline-flex", width: "2em", height: "2em" }} className="border border-dark rounded-circle justify-content-center align-items-center">{cartItem.quantity}</div>
    <i onClick={incClick} role="button"
               className={`bi bi-plus-lg fs-5 ms-2 ${isMax ? "text-secondary opacity-50" : ""}`}
               style={{ pointerEvents: isMax ? "none" : "auto" }}
               title={isMax ? "Максимальна кількість на складі" : "Додати ще"}>
            </i>
    </div>

          <div className="col col-1">
            {cartItem.price}
        </div>
            <div className="col col-1">
          <i onClick={deleteClick} role="button"className="bi bi-x-lg"></i>
        </div>
    </div>;
}
 


function EmptyCart() {
    return <p>Кошик порожній</p>;
}
