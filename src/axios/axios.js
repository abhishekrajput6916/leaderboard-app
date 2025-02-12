const BASE_URL = "https://soccer.sportmonks.com/api/v2.0/countries/153732/players";

const PPHearders = {
  api_token: "Ow5vno1RJwRUZs9ny4O9o6KCmO282B3eNjPqXpn7YZG5CZkDTT66yovFUUTx",
  per_page: 20,
};
const options = {
  method: "GET",
  url: "https://soccer.sportmonks.com/api/v2.0/countries/153732/players",
  headers: {
    api_token: "Ow5vno1RJwRUZs9ny4O9o6KCmO282B3eNjPqXpn7YZG5CZkDTT66yovFUUTx",
    per_page: 20,
  },
};
export { BASE_URL, PPHearders, options };
