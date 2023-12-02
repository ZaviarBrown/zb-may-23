import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateCart } from '../../store/cart';

function CartItem({ item }) {
    const dispatch = useDispatch();
    const [count, setCount] = useState(item.count);

    useEffect(() => {
        setCount(item.count);
    }, [item.count]);

    const handleUpdate = (newCount) => {
        if (newCount <= 0) {
            dispatch(removeFromCart(item.id));
        } else {
            dispatch(updateCart({ id: item.id, count: newCount }));
        }
    };

    return (
        <li className="cart-item">
            <div className="cart-item-header">{item.name}</div>
            <div className="cart-item-menu">
                <input
                    type="number"
                    value={count}
                    onChange={(e) => {
                        setCount(Number(e.target.value));
                    }}
                    onBlur={() => handleUpdate(count)}
                />
                <button
                    onClick={() => handleUpdate(count + 1)}
                    className="cart-item-button"
                >
                    +
                </button>
                <button
                    onClick={() => handleUpdate(count - 1)}
                    className="cart-item-button"
                >
                    -
                </button>
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
