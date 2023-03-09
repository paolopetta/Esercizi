import React, { useEffect, useState } from "react";

// Component
import HeroImage from "./HeroImage";
import Grid from "./Grid";
// Hook
import {useHomeFetch} from '../hooks/useHomeFetch'

// Image
import NoImage from '../images/no_image.jpg'
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

const Home = () => {

    const {state, loading, error} = useHomeFetch();
    //console.log(state);
    

    return (
        <>
            { state.results[0] ?
                <HeroImage
                    image= {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title= {state.results[0].original_title}
                    text= {state.results[0].overview}
                />
            : null}
            <Grid header='Popular Movies'>
                {state.results.map(movie => (
                    <div>{movie.title}</div>
                ))}
            </Grid>
        </>
    );
};

export default Home;