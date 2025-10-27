import { useEffect, useState ,useContext} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import AppContext from "../../features/appContext/AppContext";

export default function Product() {
    const {slug} = useParams();
 const [product, setProduct] = useState({price :0 });//products: [] 
 const {request} = useContext(AppContext);

    useEffect(() => {
        request("api://product/" + slug)
        .then(setProduct);
    
    }, []);

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

      <div className="col col-2">
        <p>Місце здається під рекламу</p>
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