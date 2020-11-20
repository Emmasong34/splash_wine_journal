import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* wineListSaga(){
    yield takeLatest ('FETCH_WINE_LIST', fetchWineList);
    yield takeEvery ('GET_WINE_DETAILS', getWineDetails)
    yield takeEvery ('ADD_WINE', addWine);
}

function* fetchWineList(){
    const wineListResponse = yield axios.get('/api/wine');
    yield put ({type: 'SET_WINE_LIST', payload: wineListResponse.data});
}

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

function* addWine(action){
    yield axios.post('/api/wine', action.payload);
    yield put ({type: 'FETCH_WINE_LIST'});
}



export default wineListSaga;