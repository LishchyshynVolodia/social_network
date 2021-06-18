import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BrowserRouter, Route} from "react-router-dom";
import {TopRatedFilms} from "./Components/TopRatedFilms/TopRatedFilms";
import {MoreDetails} from "./Components/MoreDetails/MoreDetails";


export type FilmsType = {
    adult: boolean;
    length: number;
    id: number;
    poster_path: string;
    title: string;
    vote_average: number;
}


function App() {
    const [films, setFilms] = useState<Array<FilmsType>>([])
    useEffect(
        () => {
            axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=b7b614211e0d6528dea1ff782fe58bef').then((response: any) => {
                setFilms(response.data.results)
            });
        }
        , []
    )
    return (
        <BrowserRouter>
            <Route path="/react_social_network_ts/:id" render={() => <MoreDetails/>}/>
            <Route exact path="/react_social_network_ts" render={() => <TopRatedFilms films={films}/>}/>
        </BrowserRouter>
    );
}


export default App