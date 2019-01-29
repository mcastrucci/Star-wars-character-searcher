import { CHANGE_SEARCH_FIELD, REQUEST_IN_PROGRESS, REQUEST_SUCCESSFUL, REQUEST_FAIL, API_URL
 } from '../constants/constants';
 import { apiCall } from '../api/apiCall'

export const setSearchField = text => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})


export const requestSearch = (text) => (dispatch) => {
    console.log('requestSearch: ');
    dispatch({ type: REQUEST_IN_PROGRESS })
    let people = apiCall(API_URL + `/?search=${text}`)
      .then(data => dispatch({ type: REQUEST_SUCCESSFUL, payload: data }))
      .catch(error => dispatch({ type: REQUEST_FAIL, payload: error }))
}

/*
export const requestSearch = () => (dispatch) => {
    dispatch ({type: REQUEST_IN_PROGRESS})
    apiCall(API_URL + `?search=${requestSearch}`)
    .then(data => dispatch({type:REQUEST_SUCCESSFUL, payload: data}))
    .catch(error => dispatch({type: REQUEST_FAIL, payload: error}))
};
*/