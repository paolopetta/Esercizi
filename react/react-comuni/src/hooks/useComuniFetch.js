import { useState, useEffect } from "react";
//API
import API from '../API';

const initialState = {
    results: [],
    total_results: 0
};

export const useComuniFetch = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    console.log(searchTerm)


    const fetchComuni = async (searchTerm = "") => {
        try{
            setError(false);
            setLoading(true);

            const comuni = await API.fetchComuni(searchTerm);

            setState({results: comuni});
        }catch (error){
            console.log(error)
            setError(true)
        }
        setLoading(false);
    };
    
    useEffect(() => {
        setState(initialState)
        fetchComuni(searchTerm)
    }, [searchTerm]);

    return {state, loading, error, setSearchTerm};

};