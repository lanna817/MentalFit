import axios from 'axios';


export const getQuote = async () => {
  
  const response = await axios.get('https://cors-anywhere.herokuapp.com/https://quotes.rest/qod')
  return response.data.contents.quotes;



}