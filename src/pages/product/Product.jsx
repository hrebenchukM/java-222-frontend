import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Product() {
    const {slug} = useParams();
 const [product, setProduct] = useState({ products: [] });


    useEffect(() => {
        // fetch("http://localhost:8080/JavaWeb222/groups/" + slug)
        // .then(r => r.json()).then(setGroup);
    }, []);

    return <>
    <h1>Сторінка товару {slug}</h1>
    
    </>;
}