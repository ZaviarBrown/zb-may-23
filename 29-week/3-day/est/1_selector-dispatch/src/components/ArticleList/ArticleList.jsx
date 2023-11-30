import { useDispatch, useSelector } from 'react-redux';
import { loadArticles } from '../../store/articleReducer';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import articlesToLoad from '../../data/data.json';

const ArticleList = () => {
    const dispatch = useDispatch();
    const { entries: articles } = useSelector((store) => store.articleState);

    useEffect(() => {
        dispatch(loadArticles());
        // dispatch({ type: 'article/loadArticles', articles: articlesToLoad });
    }, [dispatch]);

    return (
        <div>
            <h1>Article List</h1>
            <ol>
                {articles.map(({ id, title }) => {
                    return (
                        <li key={id}>
                            <NavLink to={`${id}`}>{title}</NavLink>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default ArticleList;
