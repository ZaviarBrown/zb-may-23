const ADD_TO_CART = 'cart/addToCart';
const REMOVE_FROM_CART = 'cart/removeFromCart';
const UPDATE_CART = 'cart/updateCart';
const PURCHASE = 'cart/purchase';

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        payload: id,
        // payload: { id, count: 1 },
    };
};

// { id, count }
export const updateCart = (payload) => {
    return {
        type: UPDATE_CART,
        payload,
    };
};

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id,
    };
};

export const purchase = () => ({ type: PURCHASE });

const initialState = {};

export default function cartReducer(state = initialState, action) {
    const newState = { ...state };

    switch (action.type) {
        case ADD_TO_CART:
            if (newState[action.payload]) {
                const innerCopy = { ...newState[action.payload] }; // not necessary in this case
                innerCopy.count++;
                newState[action.payload] = innerCopy;
            } else {
                newState[action.payload] = {
                    id: action.payload,
                    count: 1,
                };
            }
            return newState;

        case UPDATE_CART:
            newState[action.payload.id] = action.payload;
            return newState;

        case REMOVE_FROM_CART:
            delete newState[action.payload];
            return newState;

        case PURCHASE:
            return initialState;

        default:
            return state;
    }
}
