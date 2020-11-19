import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* wineListSaga(){
    yield takeLatest ('FETCH_WINE_LIST', fetchWineList);
    yield takeEvery ('ADD_WINE', addWine);
}

function* fetchWineList(){
    const wineListResponse = yield axios.get('/api/wine');
    yield put ({type: 'SET_WINE_LIST', payload: wineListResponse.data});
}

function* addWine(action){
    yield axios.post('/api/wine', action.payload);
    yield put ({type: 'FETCH_WINE_LIST'});
}



export default wineListSaga;