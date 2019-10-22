import axios from 'axios';


export const getQuote = async () => {
  
  const response = await axios.get('https://cors-anywhere.herokuapp.com/https://quotes.rest/qod')
  
  return response.data.contents.quotes;

}

let apiKey = "348371-MentalFi-7S7J6QHA";

export const getMusic = async (query) => {
  const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?${query}={value}&k=${apiKey}`)
  console.log(response.data.Similar)
  return response.data.Similar
}