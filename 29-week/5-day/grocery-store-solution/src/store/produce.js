import { createSelector } from 'reselect';
import produceData from '../mockData/produce.json';

//! --------------------------------------------------------------------
//*                           Action Types
//! --------------------------------------------------------------------

const POPULATE = 'produce/POPULATE';
const TOGGLE_LIKE = 'produce/toggleLike';

//! --------------------------------------------------------------------
//*                          Action Creators
//! --------------------------------------------------------------------

export const populateProduce = () => ({ type: POPULATE, payload: produceData });

export const toggleLike = (id) => {
    return {
        type: TOGGLE_LIKE,
        payload: id,
    };
};

//! --------------------------------------------------------------------
//*                            Selectors
//! --------------------------------------------------------------------

// export const selectProduceArray = (state) => Object.values(state.produce);

// export const selectProduceArray = createSelector(
//     (state) => state.produce,
//     (produce) => Object.values(produce)
// );

export const selectProduce = (store) => store.produce;
export const selectProduceArray = createSelector(selectProduce, (produce) =>
    Object.values(produce)
);

//! --------------------------------------------------------------------
//*                             Reducer
//! --------------------------------------------------------------------

const initialState = {};

export default function produceReducer(state = initialState, action) {
    const newState = { ...state };

    switch (action.type) {
        case POPULATE:
            action.payload.forEach((prodObj) => {
                const prodId = prodObj.id;
                const valueForState = prodObj;

                newState[prodId] = valueForState;
            });

            return newState;

        case TOGGLE_LIKE: {
            const copyObj = { ...newState[action.payload] };

            copyObj.liked = !copyObj.liked;

            newState[action.payload] = copyObj;

            return newState;
        }
        default:
            return state;
    }
}
