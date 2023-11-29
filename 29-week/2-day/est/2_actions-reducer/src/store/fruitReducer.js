const initialState = [{ 1: 'banana', 2: 'pear', 3: 'orange', 4: 'peach' }];

const fruitReducer = (state = initialState, action) => {
    console.log("I'M A FRUIT REDUUUUCCEEERRRR");

    // if (action.type === "articles/loadArticles") return ['hahaha'];

    return state;
};

export default fruitReducer;
