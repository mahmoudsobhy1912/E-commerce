import React, { useState, useEffect  } from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
  

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
        //         item &&
        //         <h1>{item}</h1>
        //     }

        // </div>
        <div className="product">
            <img src={item[0].photo} alt=""></img>
            <h3>ID: {id}</h3>
            <h3>Name: {item[0].name}</h3>
            <h3>price: {item[0].price}</h3>
            <h3>quantity: {item[0].quantity}</h3>
            <h3>sold: {item[0].sold}</h3>
            <h3>seller: {item[0].seller}</h3>
            <h3>added: {item[0].added}</h3>
            <h3>Category: {item[0].category}</h3>
        </div>
    );
}
 
export default Product;