// import { useContext, useEffect, useState } from "react";
// import AppContext from "../../features/appContext/AppContext";
// import { Link } from "react-router-dom";
// import './ui/Profile.css'
// const emptyUserData = {
//     role: {},
//     user: {},
//     login: null,
//     carts: []
// };

// export default function Profile() {
//     const {request, user} = useContext(AppContext);
//     const [userData, setUserData] = useState(emptyUserData);

//     useEffect(() => {
//         if(user) {
//             request("api://user/profile").then(setUserData);
//             //.then(console.log);
//         }
//         else {
//             setUserData(emptyUserData);
//         }
//     }, [user]);

//  return !user ? <div className="alert alert-danger mt-5 text-center" role="alert">Профіль доступний після входу</div>
// :
// <>
//     <h1 className="display-5 my-3">Мій профіль</h1>
//  <div className="row">
//     <div className="col">
//         {userData.login},
//         {userData.user.name}
//     </div>
    
//     <div className="col">
//     <div className="list-group">
//         {userData.carts.map(cart => {

//             const positions = cart.cartItems.length;
//             const totalItems = cart.cartItems.reduce((s, ci) => s + ci.quantity, 0);
//             const tooltip = cart.cartItems
//                 .map(ci => `${ci.product?.name ?? "???"} — ${ci.quantity}`)
//                 .join("\n");

//             let cls = "list-group-item list-group-item-action ";

//             if(cart.paidAt) cls += "bg-success-subtle text-success-emphasis";
//             else if(cart.deletedAt) cls += "bg-danger-subtle text-danger-emphasis";
//             else cls += "bg-info-subtle text-info-emphasis";

//             return (
//                 <Link 
//                     key={cart.id} 
//                     to={cart.paidAt || cart.deletedAt ? "/history/"+cart.id:"/cart"}
//                     title={tooltip}
//                     className={cls}
//                 >
//                     {new Date(cart.createdAt).toLocaleString()}
//                     {" — "}
//                     {positions} позиції ({totalItems} товарів)
//                     {" — "}
//                     {cart.price} грн
//                 </Link>
//             );
//         })}

//     </div>
// </div>

// </div>



// </>

// }