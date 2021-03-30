import React, { useEffect ,useState } from 'react';
import axios from "axios";
import Card from "./Card";

const Home = () => {
    const [product, setProduct] = useState();
    const [filters, setfilters] = useState("");

    const loadProduct = () => {
        axios.get("https://ecommerce-response.herokuapp.com/")
        .then(Response => {
            setProduct(Response.data)
        })
    }

    useEffect(() => {
        loadProduct();
    }, []);

    const handelFilter = (e) => {
        setfilters(e.target.value)
    }

    return ( 
        <div className="home">
            <h1>Wellcome in our Store :)</h1>

            <label htmlFor="Category">Category:</label>
            <select name="Category" onChange={handelFilter}>
                <option value="">All</option>
                <option value="Laptop">Laptop</option>
                <option value="Headphones">Headphones</option>
                <option value="Mobile">Mobile</option>
            </select>

            {
                product &&
                <ul>
                    {product.filter(item => item.category.includes(filters)).map(el => <li key={el.id}><Card data={el}/></li>)}
                </ul>
            }
        </div>
    );
}
 
export default Home;