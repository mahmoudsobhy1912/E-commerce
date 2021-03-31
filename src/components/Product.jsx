import React, { useState, useEffect  } from 'react';
import axios from "axios";
// import AddCart from "./AddCart";

// import {useParams} from "react-router-dom";
  

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

    // let { id } = useParams();
    
    // console.log(item)


    return (
        
        <div className="product">
            {
                item &&
                <div>
                    <img src={item[0].photo} alt=""></img>
                    <p>Name: {item[0].name}</p>
                    <p>Price: {item[0].price}</p>
                    <p>Available: {item[0].quantity - item[0].sold} Piece</p>
                    <p>Seller: {item[0].seller}</p>
                    <p>Added: {item[0].added}</p>
                    <p>Category: {item[0].category}</p>
                    {/* <AddCart data={item}/> */}
                </div>
            }
        </div>
    );
}
 
export default Product;