import React from 'react';
import { connect } from 'react-redux';
import { removeFrmCart } from '../../redux/actions/cartAction';


const Cart = (props) => {
    const { cart, removeFrmCart } = props;

    return (
        <div>
            <h4>This is cart</h4>
            <ul>
                {
                    cart.map(pd =>
                        <li key={pd.cartId}>
                            {pd.name}
                            <button onClick={() => removeFrmCart(pd.cartId)}>X</button>
                        </li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFrmCart: removeFrmCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);