import { useDispatch } from 'react-redux';
import { deleteTweetThunk } from './store/tweet';

export default function DisplayTweet({ id, message }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTweetThunk(id));
    };

    return (
        <div style={{ outline: 'solid red 1px' }}>
            <p key={id}>{message}</p>
            {id > 3 && (
                <button onClick={handleDelete}>😱 Delete Tweet 😱</button>
            )}
        </div>
    );
}
