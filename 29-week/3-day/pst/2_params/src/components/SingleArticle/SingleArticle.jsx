// import './SingleArticle.css';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

// const SingleArticle = () => {
//     const { id } = useParams();
//     const allArticles = useSelector(
//         (entireStore) => entireStore.articleState.entries
//     );

//     if (!allArticles.length) return <h1>Loading...</h1>;

//     const { title, imageUrl, body } = allArticles.find((el) => el.id === id);

//     return (
//         <div className="singleArticle">
//             <h1>{title}</h1>
//             <img src={imageUrl} alt={title} />
//             <p>{body}</p>
//         </div>
//     );
// };

// export default SingleArticle;

import './SingleArticle.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleArticle = () => {
    const { id } = useParams();
    const allArticles = useSelector(
        (entireStore) => entireStore.articleState.entries
    );

    const currentArticle = allArticles.find((el) => el.id === id);

    if (!currentArticle) return <h1>Loading...</h1>;

    return (
        <div className="singleArticle">
            <h1>{currentArticle.title}</h1>
            <img src={currentArticle.imageUrl} alt={currentArticle.title} />
            <p>{currentArticle.body}</p>
        </div>
    );
};

export default SingleArticle;
