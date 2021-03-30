import React, { useState, useEffect  } from 'react';
import axios from "axios";
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom";
  

const Product = (props) => {
    const [item, setItem] = useState();

    useEffect(() => {
        loaditem();
        // console.log(match)
    }, []);
    
    const loaditem = () => {
        axios.get("https://ecommerce-response.herokuapp.com/")
        .then(Response => {
            setItem(Response.data.filter (el => (el.id === props.match.params.id)));
        })
    }

    let { id } = useParams();
    console.log(item)

    return (
        // <div className="product">
        //     {
        //         // item &&
        //         <h1>{item.name}</h1>
        //     }

        // </div>
        <div>
            <h3>ID: {id}</h3>
        </div>
    );
}
 
export default Product;