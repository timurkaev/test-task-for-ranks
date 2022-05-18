import axios from 'axios';

export const getValutes = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'FETCH_VALUTES' });
      const response = await axios.get(
        'https://www.cbr-xml-daily.ru/daily_json.js',
      );
      dispatch({ type: 'FETCH_VALUTES_SUCCESS', payload: response.data });
    } catch (e) {
      dispatch({
        type: 'FECTH_VALUTES_ERROR',
        payload: 'Произошло ошибка при загрзке данных',
      });
      console.log(e);
    }
  };
};
