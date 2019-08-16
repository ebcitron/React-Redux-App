
import axios from 'axios';
export const FETCH_APOD_START = "FETCH_APOD_START";
export const FETCH_APOD_SUCCESS = "FETCH_APOD_SUCCESS";
export const FETCH_APOD_FAILURE = "FETCH_APOD_FAILURE";

export const getApod = () => dispatch => {
    dispatch({type: FETCH_APOD_START})  // dispatch an action object kick off that we have started the request, usefull for loading gif
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_APOD_KEY}`)
    .then(res => dispatch({ type: FETCH_APOD_SUCCESS, payload: res.data}))
    .catch(error =>
     dispatch({ type: FETCH_APOD_FAILURE, payload: error.response.data.msg})
     )}
