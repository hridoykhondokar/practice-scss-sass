import React from 'react';
import { addToCart } from '../../redux/actions/cartAction';
import Product from '../Product/Product';
import './Shop.css';
import { connect } from 'react-redux';


const Shop = (props) => {
    console.log(props)
    const { products, addToCart } = props;

    return (
        <div>
            <h1>This is Shop</h1>
            {
                products.map(pd =>
                    <Product
                        product={pd}
                        key={pd.id}
                        addToCart={addToCart}>
                    </Product>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// connectToStore(Shop);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);