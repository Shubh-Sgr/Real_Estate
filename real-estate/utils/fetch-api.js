import axios from "axios";

export const baseURL = "https://bayut.p.rapidapi.com";

export const fetchPropertyData = async (url) => {
  const response = await axios.get((url), {
    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': 'd11adc3198msh1f0cc3fc6b12742p1d919fjsn0ac366a3736d'
      }
  });
  return response.data;
};

// headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': 'd11adc3198msh1f0cc3fc6b12742p1d919fjsn0ac366a3736d'
//   }
