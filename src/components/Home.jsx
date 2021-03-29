import React, { useEffect ,useState } from 'react';
import axios from "axios";
import Card from "../components/Card";


const Home = () => {
    const [product, setProduct] = useState();

    const loadProduct = () => {
        axios.get("https://ecommerce-response.herokuapp.com/")
        .then(Response => {
            setProduct(Response.data)
        })
    }

    useEffect(() => {
        loadProduct();
    }, []);

    return ( 
        <div className="home">
            {
                product &&
                <ul>
                    {product.map(el => <li key={el.id}><Card data={el}/></li>)}
                </ul>
            }
        </div>
    );
}
 
export default Home;