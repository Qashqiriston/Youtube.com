import axios from 'axios'
 
const BACE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
  maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': 'd303a44aebmshc0be26aa43d407cp10ed98jsnd9931eaab378',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};



export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${BACE_URL}/${url}`, options)
    return response.data
  }
}