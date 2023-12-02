import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';

export const populateProduce = () => ({ type: POPULATE, payload: produceData });

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
        default:
            return state;
    }
}
