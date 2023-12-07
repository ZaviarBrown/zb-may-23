// constant to avoid debugging typos
const GET_ALL_TWEETS = 'tweet/getAllTweets';
const CREATE_TWEET = 'tweet/createTweet';
const DELETE_TWEET = 'tweet/deleteTweet';

//regular action creator
const loadTweets = (tweets) => {
    return {
        type: GET_ALL_TWEETS,
        tweets,
    };
};

const createTweet = (payload) => ({ type: CREATE_TWEET, payload });

const deleteTweet = (payload) => {
    const action = {
        type: DELETE_TWEET,
        payload,
    };

    return action;
};

// thunk action creator
export const getAllTweets = () => async (dispatch) => {
    const response = await fetch('/api/tweets');

    if (response.ok) {
        const data = await response.json();
        dispatch(loadTweets(data));
        return data;
    }
};

export const createTweetThunk = (tweet) => async (dispatch) => {
    const res = await fetch('/api/tweets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tweet), // { message: "Whatever" }
    });

    if (res.ok) {
        const data = await res.json();
        dispatch(createTweet(data));
        return data;
    } else {
        const err = await res.json();
        return err;
    }
};

export const deleteTweetThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/tweets/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (res.ok) {
        const data = await res.json();
        dispatch(deleteTweet(id));
        return data;
    } else {
        const err = await res.json();
        return err;
    }
};

// state object
const initialState = {};

// reducer
const tweetsReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case GET_ALL_TWEETS: {
            const newState = {};
            action.tweets.forEach((tweet) => (newState[tweet.id] = tweet));
            return newState;
        }
        case CREATE_TWEET: {
            newState[action.payload.id] = action.payload;
            return newState;
        }
        case DELETE_TWEET: {
            delete newState[action.payload];
            return newState;
        }
        default:
            return state;
    }
};

export default tweetsReducer;
