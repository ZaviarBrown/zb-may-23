import { useEffect, useState } from 'react';
import { postTweetThunk } from './store/tweet';
import { useDispatch } from 'react-redux';

export default function CreateTweet() {
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');
    const [charCount, setCharCount] = useState(0);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const newErrors = {};
        if (charCount >= 280) {
            newErrors.text = 'Over the 280 character limit!';
        }
        if (charCount <= 0) {
            newErrors.text = "Can't submit an empty tweet!";
        }

        setErrors(newErrors);
    }, [charCount]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { message };

        const err = await dispatch(postTweetThunk(data));

        if (!err) {
            setMessage('');
            setCharCount(0);
        } else {
            setErrors({ ...errors, 'api-error': err.message });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="tweet-form">
            <h1>Tweet something!</h1>
            <textarea
                value={message}
                onChange={(e) => {
                    setMessage(e.target.value);
                    setCharCount(e.target.value.length);
                }}
                placeholder="What's on your mind?"
            />
            <div className="tweet-count">
                <span style={{ color: 'red' }}>{errors.text}</span>
                <span>{charCount}</span>
            </div>
            <button disabled={errors.text}>Post Tweet</button>
        </form>
    );
}
