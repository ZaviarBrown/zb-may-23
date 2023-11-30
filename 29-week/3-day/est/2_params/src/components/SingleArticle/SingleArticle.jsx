// import './SingleArticle.css';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

// const SingleArticle = () => {
//     const { id } = useParams();
//     const allArticles = useSelector(
//         (entireReduxObject) => entireReduxObject.articleState.entries
//     );

//     const currArticle = allArticles.find((el) => el.id === id);

//     if (!currArticle) return <h1>Loading...</h1>;

//     return (
//         <div className="singleArticle">
//             <h1>{currArticle?.title}</h1>
//             <img src={currArticle?.imageUrl} alt={currArticle?.title} />
//             <p>{currArticle?.body}</p>
//         </div>
//     );
// };

// export default SingleArticle;

//! --------------------------------------------------------------------
//*                        Destructuring Version
//! --------------------------------------------------------------------

import './SingleArticle.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleArticle = () => {
    const { id } = useParams();

    const allArticles = useSelector(
        (entireReduxObject) => entireReduxObject.articleState.entries
    );

    if (!allArticles.length) return <h1>Loading...</h1>;

    const { title, imageUrl, body } = allArticles.find((el) => el.id === id);

    return (
        <div className="singleArticle">
            <h1>{title}</h1>
            <img src={imageUrl} alt={title} />
            <p>{body}</p>
        </div>
    );
};

export default SingleArticle;
