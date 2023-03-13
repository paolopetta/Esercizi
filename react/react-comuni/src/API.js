import data from './comuni.json'

export default {
  fetchComuni:  (searchTerm) =>  data.filter(element => element["nome"].toLowerCase().includes(searchTerm.toLowerCase()))
};