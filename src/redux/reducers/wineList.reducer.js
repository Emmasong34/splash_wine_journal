import { combineReducers } from 'redux';

const wineList = (state = [], action) => {
    switch (action.type) {
       
        case 'SET_WINE_LIST':
            return action.payload;
            default:
                return state;
    }
}

export default combineReducers ({
    wineList,
});