import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

const fetchAPI = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '4d71070d63msha471ce74afc41fep192e67jsnaad3a297dec1' ,
    },
  });
    
  return data;
}

export default fetchAPI;
