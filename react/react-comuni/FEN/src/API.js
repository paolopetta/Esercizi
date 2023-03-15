export default {
  /*fetchComuni: (searchTerm) =>
    data.filter((element) =>
      element["nome"].toLowerCase().includes(searchTerm.toLowerCase())
    ),*/

  fetchComuniMongo: (searchTerm) => {
    return fetch("http://localhost:5000/comuni/" + searchTerm, {
      method: "GET",
      mode: "cors",
    }).then((response) => response.json());
  },

  fetchCap: (searchTerm) => {
    return fetch("http://localhost:5000/cap/" + searchTerm, {
      method: "GET",
      mode: "cors",
    }).then((response) => response.json());
  },
};
