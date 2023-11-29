const initialState = [{ 1: 'banana', 2: 'pear', 3: 'orange', 4: 'peach' }];

const fruitReducer = (state = initialState, action) => {
    if (action.type === 'fruit/DELETE') return [];

    return state;
};

export default fruitReducer;
