import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';
const TOGGLE_LIKE = 'produce/toggleLike';

export const populateProduce = () => ({ type: POPULATE, payload: produceData });

export const toggleLike = (id) => {
    return {
        type: TOGGLE_LIKE,
        payload: id,
    };
};

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
