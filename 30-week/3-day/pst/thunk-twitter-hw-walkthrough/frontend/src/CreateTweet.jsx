import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createTweetThunk } from './store/tweet';

export default function CreateTweet() {
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const newErrors = {};
        if (message.length > 280) {
            newErrors.message = 'TWEET TOO LONG!!!!';
            newErrors.invalid = true;
        }

        if (message.length <= 0) {
            newErrors.invalid = true;
        }

        setErrors(newErrors);
    }, [message]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { message };

        const err = await dispatch(createTweetThunk(data));

        if (err.error) {
            // handle some errors
        } else {
            setMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="tweet-form">
            <h1>Compose a mastertweet!</h1>
            {errors.message && (
                <div style={{ color: 'red' }}>{errors.message}</div>
            )}
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What is on your mind?"
            />
            <div className="tweet-submit">
                <span>{message.length} / 280</span>
                <button disabled={errors.invalid}>Tweet now!</button>
            </div>
        </form>
    );
}
