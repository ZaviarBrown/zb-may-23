import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';

export const loadArticles = () => {
    return {
        type: LOAD_ARTICLES,
        payload: articles,
    };
};

export const deleteArticles = () => {
    return {
        type: 'article/DELETE',
    };
};

const defaultState = {
    entries: [],
    isLoading: true,
};

export default function articleReducer(state = defaultState, action) {
    const newState = { ...state };

    // console.log("It'sa meeee, an articleReducaaahh");

    switch (action.type) {
        case LOAD_ARTICLES:
            newState.entries = [...action.payload];

            return newState;

        case 'article/DELETE':
            return {};

        // case ADD_ARTICLES:
        //     newState.entries = [action.payload];

        //     return newState;

        default:
            return state;
    }
}
