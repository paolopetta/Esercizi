import data from './comuni.json'

/*const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};*/

export default {
  fetchComuni: async (searchTerm) => {
      //console.log(data)
      var search = data.filter(element => element["nome"].toLowerCase().includes(searchTerm.toLowerCase()))
      return search;
  },

};