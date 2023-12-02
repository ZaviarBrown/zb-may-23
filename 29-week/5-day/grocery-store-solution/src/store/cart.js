const ADD_TO_CART = 'cart/addToCart';

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        payload: id,
        // payload: { id, count: 1 },
    };
};

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

        default:
            return state;
    }
}
