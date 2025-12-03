import { useEffect, useState ,useContext} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import AppContext from "../../features/appContext/AppContext";

export default function Product() {
    const {slug} = useParams();
 const [product, setProduct] = useState({price :0 });//products: [] 
 const {request,token} = useContext(AppContext);

    useEffect(() => {
        request("api://product/" + slug)
        .then(setProduct);
    
    }, []);




      const addToCartClick=(e)=>{
        e.preventDefault();
        if(token==null){
            alert("Користувач не авторизований!");
            return;
        }
        request("api://cart?product-id="+ product.id , {
            method:"POST",
        }).then(console.log).catch(console.log);

        console.log( product.id);
        alert(`Товар "${product.id}" додано до кошика!`);
    
    }



 return (
  <>
    <h1>Сторінка товару {product.name}</h1>

    <div className="row">
      <div className="col col-4">
        <img className="w-100" src={product.imageUrl} alt={product.name} />
      </div>

      <div className="col col-6">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <strong>{product.price?.toFixed(2)} ₴</strong>
      </div>
    <div className="col col-12 col-md-2 d-flex align-items-start">
       <button onClick={addToCartClick} className="btn btn-outline-success w-100">
          <i className="bi bi-cart-plus"></i> До кошику
       </button>
    </div>

<div className="col col-2">
    <div className="border p-2 mt-2">Місце здається під рекламу</div>

    {product.rates && product.rates.map(r => <div key={r.id} className="border p-2 mt-2">
        {r.createdAt.substring(0,5)}&thinsp;
        <a href={"mailto:" + r.user.email} title={r.user.name + ' ' + r.user.email}>
            {r.user.name.split(' ').map(x => x.substring(0,1)).join('')}
        </a>&thinsp;

        Коментар: {r.text && r.text.length > 0
            ? <i>{r.text}</i>
            : <span title="Немає коментаря">--</span>}
        <br/>

        Оцінка: {r.rateStars > 0
            ? <b>{r.rateStars}</b>
            : <span title="Немає оцінки">--</span>}
    </div>)}
</div>

    </div>



    
{product.relativeProducts?.length > 0 && (
  <>
    <h4>Подібні товари</h4>
    <div className="row">
      {product.relativeProducts.map((p) => (
        <div key={p.id} className="col-6 col-md-3 mb-3">
          <Link to={`/product/${p.slug}`} className="card p-2 text-center text-decoration-none text-dark">
            <img 
              src={p.imageUrl} 
              className="w-100 mb-2" 
              alt={p.name} 
              style={{objectFit: 'cover'}}
            />
            <div>{p.name}</div>
            <div className="fw-bold">{p.price?.toFixed(2)} ₴</div>
          </Link>
        </div>
      ))}
    </div>
  </>
)}


        </>
    );
}