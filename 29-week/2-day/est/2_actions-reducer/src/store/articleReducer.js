import articles from '../data/data.json';

// const myAction = {
//     type: 'the orders',
//     payload: 'the data to perform the orders with',
// };

const LOAD_ARTICLES = 'articles/loadArticles';

export const loadArticles = () => {
    return {
        type: LOAD_ARTICLES,
        payload: articles,
    };
};

const defaultState = {
    entries: [],
    isLoading: true,
};

export default function articleReducer(articleState = defaultState, action) {
    const newState = { ...articleState };

    console.log('Checkout these articles yeahhh');

    switch (action.type) {
        case LOAD_ARTICLES:
            newState.entries = [...action.payload];
            return newState;
        default:
            return articleState;
    }
}

// const articleReducer = () => {};

// export default articleReducer;
