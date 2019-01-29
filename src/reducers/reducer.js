import { CHANGE_SEARCH_FIELD, REQUEST_IN_PROGRESS, REQUEST_SUCCESSFUL, REQUEST_FAIL
} from '../constants/constants';

const initialStateSeacrh = {
    searchField: ''
}

const initialStateSearchResults = {
    requestInProgress: false,
    results: []
}

export const searchContent = (state=initialStateSeacrh, action={}) => {
    switch (action.type){
        case CHANGE_SEARCH_FIELD:
        console.log(action.payload);
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}


export const searchResult = (state= initialStateSearchResults, action={}) => {
        switch (action.type){
            case REQUEST_IN_PROGRESS:
                console.log('reducer-searchResult- REQUEST_IN_PROGRESS')
                return Object.assign({}, state, {requestInProgress: true});
            case REQUEST_SUCCESSFUL:
            console.log('reducer-searchResult- request_Success: ', action.payload)
                return Object.assign({}, state, {requestInProgress: false, results: action.payload})
            case REQUEST_FAIL:
                return Object.assign({}, state, {requestInProgress: false, error: action.payload})
            default:
                return state; 
        }
}
