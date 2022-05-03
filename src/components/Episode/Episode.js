import {useNavigate} from 'react-router-dom'

import css from './episode.module.css'
import {useDispatch} from "react-redux";
import {episodeActions} from "../../redux";

const Episode = ({episode: {name, air_date, episode, characters}}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toCharacters = () => {
        dispatch(episodeActions.currentEpisode({episodeName: name}))
        navigate('/characters', {state: characters})
    }

    return (
        <div className={css.episode} onClick={toCharacters}>
            <h1>name: {name}</h1>
            <h2>air_date: {air_date}</h2>
            <h2>episode: {episode}</h2>
        </div>
    );
};

export {Episode};