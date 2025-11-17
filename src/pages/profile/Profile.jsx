import { useContext, useEffect, useState } from "react";
import AppContext from "../../features/appContext/AppContext";
import { Link } from "react-router-dom";

const emptyUserData = {
    role: {},
    user: {},
    login: null,
    carts: []
};

export default function Profile() {
    const {request, user} = useContext(AppContext);
    const [userData, setUserData] = useState(emptyUserData);

    useEffect(() => {
        if(user) {
            request("api://user/profile").then(setUserData);
            //.then(console.log);
        }
        else {
            setUserData(emptyUserData);
        }
    }, [user]);

 return !user ? <div className="alert alert-danger mt-5 text-center" role="alert">Профіль доступний після входу</div>
:
<>
    <h1 className="display-5 my-3">Мій профіль</h1>
 <div className="row">
    <div className="col">
        {userData.login},
        {userData.user.name}
    </div>
    <div className="col">
       <div className="list-group">
                    {userData.carts.map(cart => <Link key={cart.cartId} to="/" 
                        className={"list-group-item list-group-item-action " + (cart.paidAt ? "bg-success" : (cart.deletedAt ? "bg-danger" : "bg-info"))}>
                        {new Date(cart.createdAt).toLocaleString()} {cart.cartItems.length}
                    </Link>)}
        </div>
    </div>
</div>



</>

}