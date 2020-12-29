const axios = require('axios');

export const SearchTeams = (key: string) => {
  axios({
    method: 'GET',
    url: `https://api-football-v1.p.rapidapi.com/v2/teams/search/${key}`,
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': '1d44c92e7dmsh6acba81f6a50633p153ab1jsnf6d66d18205e',
      useQueryString: true,
    },
  })
    .then((response: any) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error: any) => {
      return error;
    });
};
