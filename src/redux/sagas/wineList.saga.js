import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* wineListSaga(){
    yield takeLatest ('FETCH_WINE_LIST', fetchWineList);
    yield takeEvery ('GET_WINE_DETAILS', getWineDetails);
    yield takeEvery ('DELETE_WINE', deleteWine);
    yield takeEvery ('EDIT_WINE', editWine);
    yield takeEvery ('ADD_WINE', addWine);
}

//gets wine list from database
function* fetchWineList(){
    const wineListResponse = yield axios.get('/api/wine');
    yield put ({type: 'SET_WINE_LIST', payload: wineListResponse.data});
}

//gets all details only for selected wine
function* getWineDetails(wineClicked){
    console.log('wineClicked.id:', wineClicked.payload.id)
        try {
            const detailsArray = yield axios.get(`/api/wine/${wineClicked.payload.id}`);
                console.log('in getWineDetails', detailsArray)
            yield put({ type: 'SET_WINE_LIST', payload: detailsArray.data})
        }
            catch(error){
                console.log('error in getting details from wine DB')
            }
}

//deletes wine from database
function* deleteWine(action){
    console.log('delete saga', action)
    yield axios.delete(`/api/wine/${action.payload}`);
    yield put ({type: 'FETCH_WINE_LIST'});
}

//updates wine information in database
function* editWine(action){
    console.log('edit wine saga action.payload:', action.payload);
    yield axios.put(`/api/wine/${action.payload.id}` , action.payload);
}

//adds wine to database
function* addWine(action){
    yield axios.post('/api/wine', action.payload);
    yield put ({type: 'FETCH_WINE_LIST'});
}



export default wineListSaga;