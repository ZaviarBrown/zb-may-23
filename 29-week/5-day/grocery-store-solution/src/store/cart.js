//! --------------------------------------------------------------------
//*                            Action Types
//! --------------------------------------------------------------------

import { createSelector } from 'reselect';
import { selectProduce } from './produce';

const ADD_TO_CART = 'cart/addToCart';
const REMOVE_FROM_CART = 'cart/removeFromCart';
const UPDATE_CART = 'cart/updateCart';
const PURCHASE = 'cart/purchase';

//! --------------------------------------------------------------------
//*                           Action Creators
//! --------------------------------------------------------------------

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

//! --------------------------------------------------------------------
//*                            Selectors
//! --------------------------------------------------------------------

export const selectCart = (store) => store.cart;
export const selectCartItemById = (id) => (store) => store.cart[id];
// export const selectCartItems = createSelector(
//     selectCart,
//     selectProduce,
//     (cart, produce) =>
//         Object.values(cart).map((item) => ({ ...item, ...produce[item.id] }))
// );

//! ------------------------- After Bonus Refactor ----------------------------

// const cartStore = {
//     order: [3, 1, 11, 7, 4],
//     1: {},
//     2: {},
//     3: {},
//     // ...
// };

export const selectCartItems = createSelector(
    selectCart,
    selectProduce,
    (cart, produce) =>
        cart.order.map((itemId) => ({ ...cart[itemId], ...produce[itemId] }))
);

export const selectCartArray = (store) => store.cart.order;

//! --------------------------------------------------------------------
//*                             Reducer
//! --------------------------------------------------------------------

export const purchase = () => ({ type: PURCHASE });

const initialState = { order: [] };

export default function cartReducer(state = initialState, action) {
    const newState = { ...state, order: [...state.order] };

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
                newState.order.push(action.payload);
            }
            return newState;

        case UPDATE_CART:
            newState[action.payload.id] = action.payload;
            return newState;

        case REMOVE_FROM_CART:
            delete newState[action.payload];

            newState.order = newState.order.filter(
                (id) => id !== action.payload
            );

            return newState;

        case PURCHASE:
            return initialState;

        default:
            return state;
    }
}
