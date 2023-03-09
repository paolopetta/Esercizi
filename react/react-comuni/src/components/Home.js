import React from "react";

// Component
//import HeroImage from "./HeroImage";
import Grid from "./Grid";
import SearchBar from "./SearchBar";
import Thumb from "./Thumb";

// Hook
import {useComuniFetch} from '../hooks/useComuniFetch'

// Image
//import NoImage from '../images/no_image.jpg'
//import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

const Home = () => {

    const {state, loading, error, setSearchTerm} = useComuniFetch();
    
    return (
        <>
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Grid header='Risultato'>
                {state.results.map(comuni => (
                    <div>{comuni.nome} Cap: {comuni.cap}</div>
                ))}
            </Grid>
        </>
    );
};

export default Home;