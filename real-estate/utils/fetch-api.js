import axios from "axios";

export const baseURL = "https://bayut.p.rapidapi.com";

export const fetchPropertyData = async (url) => {
  const response = await axios.get((url), {
    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': "your-api-key"
      }
  });
  return response.data;
};


