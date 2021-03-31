import React, { useState, useEffect  } from 'react';
import axios from "axios";
<<<<<<< HEAD
=======
// import AddCart from "./AddCart";

>>>>>>> cd30d4f27b28096e808113c2df4a5400464be71c
// import {useParams} from "react-router-dom";
  

const Product = (props) => {
    const [item, setItem] = useState();

    useEffect(() => {
        loaditem();
        // console.log(match)
    });
    
    const loaditem = () => {
        axios.get("https://ecommerce-response.herokuapp.com/")
        .then(Response => {
            setItem(Response.data.filter (el => (el.id === props.match.params.id)));
        })
    }

<<<<<<< HEAD
    //let { id } = useParams();
    //console.log(item)
=======
    // let { id } = useParams();
    
    // console.log(item)
>>>>>>> cd30d4f27b28096e808113c2df4a5400464be71c


    return (
        
        <div className="product">
            {
                item &&
                <div>
                    <img src={item[0].photo} alt=""></img>
<<<<<<< HEAD
                    <h3>Name: {item[0].name}</h3>
                    <h3>price: {item[0].price}$</h3>
                    <h3>Available: {item[0].quantity - item[0].sold} Piece</h3>
                    <h3>seller: {item[0].seller}</h3>
                    <h3>added: {item[0].added}</h3>
                    <h3>Category: {item[0].category}</h3>
                    <button>Add to Cart</button>
=======
                    <p>Name: {item[0].name}</p>
                    <p>Price: {item[0].price}</p>
                    <p>Available: {item[0].quantity - item[0].sold} Piece</p>
                    <p>Seller: {item[0].seller}</p>
                    <p>Added: {item[0].added}</p>
                    <p>Category: {item[0].category}</p>
                    {/* <AddCart data={item}/> */}
>>>>>>> cd30d4f27b28096e808113c2df4a5400464be71c
                </div>
            }
        </div>
    );
}
 
export default Product;