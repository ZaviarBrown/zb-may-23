import { createSelector } from 'reselect';

const LOAD_ARTICLES = 'article/loadArticles';
const ADD_ARTICLE = 'article/addArticle';

export const loadArticles = (articles) => {
    return {
        type: LOAD_ARTICLES,
        articles,
    };
};

export const addArticle = (article) => {
    return {
        type: ADD_ARTICLE,
        article,
    };
};

export const fetchArticles = () => async (dispatch) => {
    const response = await fetch('/api/articles');
    const articles = await response.json();
    dispatch(loadArticles(articles));
};

export const writeArticle = (payload) => async (dispatch) => {
    const response = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    if (response.ok) {
        const article = await response.json();
        dispatch(addArticle(article));
        return article;
    }
};

const selectArticles = (state) => state.articleState.entries;
export const selectArticlesArray = createSelector(selectArticles, (articles) =>
    Object.values(articles)
);
export const selectArticleById = (id) => (state) =>
    state.articleState.entries[id];

const initialState = { entries: {}, isLoading: true };

const articleReducer = (state = initialState, action) => {
    const newState = { ...state, entries: { ...state.entries } };

    switch (action.type) {
        case LOAD_ARTICLES:
            for (const articleObj of action.articles) {
                newState.entries[articleObj.id] = articleObj;
            }

            return newState;
        case ADD_ARTICLE:
            newState.entries[action.article.id] = action.article;

            return newState;
        default:
            return state;
    }
};

export default articleReducer;
