import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import ProduceList from './components/ProduceList';
import { useDispatch, useSelector } from 'react-redux';
import { populateProduce } from './store/produce';
import { selectCartArray } from './store/cart';

function App() {
    const dispatch = useDispatch();
    const cartArray = useSelector(selectCartArray);
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        dispatch(populateProduce());
    }, [dispatch]);

    useEffect(() => {
        if (cartArray.length) {
            setShowCart(true);
        }
    }, [cartArray.length]);

    return (
        <>
            <nav>
                <h1>Grocery Store</h1>
                <button
                    className="checkout-button"
                    onClick={() => setShowCart(true)}
                >
                    <i className="fas fa-shopping-bag" />
                    Checkout
                </button>
            </nav>
            <main style={showCart ? { marginRight: '300px' } : {}}>
                <ProduceList />
            </main>
            <div
                className="sidebar"
                style={showCart ? { transform: 'translateX(-100%)' } : {}}
            >
                <div className="sidebar-header">
                    <button
                        className="arrow-button"
                        onClick={() => setShowCart(false)}
                    >
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
                <Cart />
            </div>
        </>
    );
}

export default App;
