import axios from 'axios';


export const getQuote = async () => {
  
  const response = await axios.get('https://cors-anywhere.herokuapp.com/https://quotes.rest/qod')
  
  return response.data.contents.quotes;

}

// export const getLove = async () => {
//   const response = await axios.get('http://quotes.rest/qod/categories')
//   console.log(response.data.contents.categories.love)
// }