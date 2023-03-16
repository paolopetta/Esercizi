import { useState, useEffect } from "react";
//API
import API from "../API";

const initialState = {
  results: [],
  total_results: 0,
};

export const useProvinceFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchProvince = async (searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      if (searchTerm === "") {
        const allProvince = await API.fetchAll(searchTerm);
        setState({ results: allProvince });
      } else {
        const Province = await API.fetchProvinceMongo(searchTerm);
        //const cap = await API.fetchCap(searchTerm);
        //setState({ results: Province.concat(cap) });
        setState({ results: Province });
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    setState(initialState);
    fetchProvince(searchTerm);
  }, [searchTerm]);

  return { state, loading, error, setSearchTerm };
};
