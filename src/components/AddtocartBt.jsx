import React, {useState} from "react";

const AddtocartBt = (props) => {
    const [cart, setcart] = useState([]);

    const handelcart = () => {
        setcart([...cart,props.data]);
        console.log([...cart,props.data])
    }
    
    return ( 
        <>
            <button onClick={handelcart}>Add to Cart</button>
        </>
     );
}

export default AddtocartBt;