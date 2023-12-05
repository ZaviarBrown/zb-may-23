const LOAD_ARTICLES = 'article/loadArticles';
const ADD_ARTICLE = 'article/addArticle';

//! --------------------------------------------------------------------
//*                            Action Creators
//! --------------------------------------------------------------------

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

//! --------------------------------------------------------------------
//*                            Thunks
//! --------------------------------------------------------------------

export const fetchArticlesThunk = () => async (dispatch) => {
    const res = await fetch('/api/articles');

    if (res.ok) {
        const data = await res.json();

        dispatch(loadArticles(data));
    } else {
        const err = await res.json();

        return err; // handle this some other time
    }
};

export const writeArticleThunk = (userInput) => async (dispatch) => {
    const res = await fetch('/api/articles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInput),
    });

    if (res.ok) {
        const data = await res.json();

        dispatch(addArticle(data));
    } else {
        const err = await res.json();

        return err; // handle this some other time
    }
};

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ARTICLES:
            return { ...state, entries: [...action.articles] };
        case ADD_ARTICLE:
            return { ...state, entries: [...state.entries, action.article] };
        default:
            return state;
    }
};

export default articleReducer;
