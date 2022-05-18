const FETCH_VALUTES = 'FETCH_VALUTES';
const FETCH_VALUTES_SUCCESS = 'FETCH_VALUTES_SUCCESS';
const FETCH_VALUTES_ERROR = 'FETCH_VALUTES_ERROR';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const valutesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VALUTES:
      return { ...state, isLoading: true };
    case FETCH_VALUTES_SUCCESS:
      return { ...state, items: action.payload, isLoading: false };
    case FETCH_VALUTES_ERROR:
      return { ...state, items: action.payload, isLoading: false };
    default:
      return state;
  }
};
