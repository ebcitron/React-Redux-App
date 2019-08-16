import {FETCH_APOD_START, FETCH_APOD_SUCCESS, FETCH_APOD_FAILURE} from '../actions';


const initialState = {

};
const reducer = (state = initialState, action ) => {
    console.log('action', action);
    switch(action.type){
       case FETCH_APOD_START:
        return{
            ...state,
            error:"",
            loading:true
        }
        case FETCH_APOD_SUCCESS:
            return{
                ...state,
                error: "",
                loading: false,
                apod: action.payload
            }
        case FETCH_APOD_FAILURE:
            return{
                ...state,
                eror: action.payload,
                loading: false,
                apod: null
            }
        default:
            return state;
    }
};
export default reducer;