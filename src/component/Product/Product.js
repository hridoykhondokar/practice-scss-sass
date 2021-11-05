import React from 'react';

const Product = (props) => {
    const { name, id } = props.product;
    const { addToCart } = props
    return (
        <div style={{ border: '1px solid tomato' }}>
            <h3> Name : {name}</h3>
            <button onClick={() => { addToCart(id, name) }}>Add To Cart</button>
        </div>
    );
};

export default Product;