import React, {useEffect} from "react";
import {useAppSelector, useAppDispatch} from '../../store';
import fetchFilms from "../../utils/requests";

//style
import styles from './List.module.scss';

const MuseumList = () => {
    const {list: listOfFilms, loading, error} = useAppSelector((state) => state.film);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchFilms());
    }, [])

    const listContent = listOfFilms.map(({id, title, image, description, director, release_date, rt_score, running_time}) => {
        return (
            <li key={id} className="film-list__item">
                <img src={image} alt="Image" />
                <h4 className="film-list__title">{title}</h4>
                <p className="film-list__description">{description}</p>
                <p className="film-list__text"><span>Director</span> {director} </p>
                <p className="film-list__text"><span>Release date</span> {release_date}, Score {rt_score}</p>
                <p className="film-list__text"><span>Running time</span> {running_time} minutes</p>
            </li>
        );
    });

    return (
        <div className={styles['film-list']}>
            <div className="container">
                <div className="film-list__content">
                    {loading && <p className="film-list__loading">Loading...</p>}
                    {!loading && error && <p className="film-list__error"> Error: {error}</p>}
                    {!loading && listOfFilms.length &&
                        <ul className="film-list__items">
                            {listContent}
                         </ul>
                    }
                </div>
            </div>
        </div>
    )

};

export default MuseumList;