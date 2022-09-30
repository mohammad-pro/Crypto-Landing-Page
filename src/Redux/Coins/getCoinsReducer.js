const initalState = {
  coins: [],
  isLoading: false,
  error: "",
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "FETCH_GET_COINS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };

    case "FETCH_GET_COINS_SUCCESS":
      return {
        isLoading: false,
        coins: action.payload,
      };

    case 'FETCH_GET_COINS_ERROR' :
        return {
            isLoading:false ,
            error : action.payload,

        }

    default :
        return state
  }
};

export default reducer ;