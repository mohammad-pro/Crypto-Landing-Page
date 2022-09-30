import axios from "axios";

const options = {
  method: "GET",
  url: "https://blockchain-news1.p.rapidapi.com/news/NDTV",
  headers: {
    "X-RapidAPI-Key": "0ea28ccf44mshaafde0f66189958p131bc0jsn720730e5993a",
    "X-RapidAPI-Host": "blockchain-news1.p.rapidapi.com",
  },
};

const fetchEventRequest = () => {
  return { type: "FETCH_EVENT_REQUEST" };
};

const fetchEventSuccess = (data) => {
  return { type: "FETCH_EVENT_SUCCESS", payload: data };
};

const fetchEventError = (error) => {
  return { type: "FETCH_EVENT_ERROR", payload: error };
};

const fetchEvent = () => {
  return (dispath) => {
    dispath(fetchEventRequest());
    axios
      .request(options)
      .then(function (response) {
        dispath(fetchEventSuccess(response.data));
      })
      .catch(function (error) {
        dispath(fetchEventError(error));
      });
  };
};

export { fetchEvent };
