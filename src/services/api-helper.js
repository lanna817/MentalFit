import axios from 'axios';


export const getQuote = async () => {

  const response = await axios.get('https://cors-anywhere.herokuapp.com/https://quotes.rest/qod')

  return response.data.contents.quotes;

}

export const getActive = async () => {
  const response = await axios.get('http://www.boredapi.com/api/activity/')
  console.log(response.data)




}