import axios from "axios";

const fetchGetCoinsRequest = () => {
  return { type: "FETCH_GET_COINS_REQUEST" };
};

const fetchGetCoinsSucces = (data) => {
  return { type: "FETCH_GET_COINS_SUCCESS", payload: data };
};

const fetchGetCoinsError = (data) => {
  return { type: "FETCH_GET_COINS_ERROR", payload: data };
};

const fetchCoins = (perPage, page) => {
  return (dispath) => {
    dispath(fetchGetCoinsRequest());
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`
      )
      .then((response) => dispath(fetchGetCoinsSucces(response.data)))
      .catch((error) => dispath(fetchGetCoinsError(error)));
  };
};

export {
  fetchGetCoinsRequest,
  fetchGetCoinsSucces,
  fetchGetCoinsError,
  fetchCoins,
};
