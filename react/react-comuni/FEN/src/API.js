export default {
  /* Ricerca su file
  fetchComuni: (searchTerm) =>
    data.filter((element) =>
      element["nome"].toLowerCase().includes(searchTerm.toLowerCase())
    ),*/

  fetchAllComuni: () => {
    return fetch("http://localhost:5000/getAllComuni", {
      method: "GET",
      mode: "cors",
    }).then((response) => response.json());
  },

  fetchSearchComuni: (searchTerm) => {
    return fetch("http://localhost:5000/comuni/" + searchTerm, {
      method: "GET",
      mode: "cors",
    }).then((response) => response.json());
  },

  fetchSearchMerge: (searchTerm) => {
    return fetch("http://localhost:5000/merge/" + searchTerm, {
      method: "GET",
      mode: "cors",
    }).then((response) => response.json());
  },
};
