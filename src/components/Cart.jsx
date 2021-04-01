import React, { /*useState,*/ useEffect } from "react";

const Cart = (props) => {

    // const [products, setproducts] = useState([]);
    const loadProduct = () => {
        // setproducts(props.data)
        // console.log(props)
    }

    useEffect(() => {
        loadProduct();
    });


    return (
        <> 
        
            <p>cart</p>
            {/* {
                products &&
                <ul className = "list">
                    {products.map(el => <li key={el.id}>{el.name}</li>)}
                </ul>
            } */}
        
        </>
     );
}
 
export default Cart;