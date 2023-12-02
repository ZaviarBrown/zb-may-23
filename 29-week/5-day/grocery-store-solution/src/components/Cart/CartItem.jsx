import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cart';

function CartItem({ item }) {
    const dispatch = useDispatch();
    const [count, setCount] = useState(item.count);

    useEffect(() => {
        setCount(item.count);
    }, [item.count]);

    return (
        <li className="cart-item">
            <div className="cart-item-header">{item.name}</div>
            <div className="cart-item-menu">
                <input
                    type="number"
                    value={count}
                    onChange={() => 'TODO: come back here'} // TODO: PLEASE DON'T FORGET
                />
                <button className="cart-item-button">+</button>
                <button className="cart-item-button">-</button>
                <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="cart-item-button"
                >
                    Remove
                </button>
            </div>
        </li>
    );
}

export default CartItem;
