const initalState = {
  isLoading: false,
  data: [],
  error: "",
};

const getEventReducer = (state = initalState, action) => {
  switch (action.type) {
    case "FETCH_EVENT_REQUEST":
      return {
        ...state,
        isLoading: true,
      };

    case "FETCH_EVENT_SUCCESS":
      return {
        isLoading: false,
        data: action.payload,
      };

    case "FETCH_EVENT_ERROR":
      return {
        isLoading: false,
        error: action.payload,
      };

    default :
      return state 
  }
};

export default getEventReducer;
