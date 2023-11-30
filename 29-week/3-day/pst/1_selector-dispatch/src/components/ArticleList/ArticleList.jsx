import { useDispatch, useSelector } from 'react-redux';
import { loadArticles } from '../../store/articleReducer';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const ArticleList = () => {
    const dispatch = useDispatch();
    const articles = useSelector((store) => store.articleState.entries);

    useEffect(() => {
        dispatch(loadArticles());
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
