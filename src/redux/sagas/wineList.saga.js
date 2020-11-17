import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* wineListSaga(){
    yield takeLatest ('FETCH_WINE_LIST', fetchWineList);
}

function* fetchWineList(){
    const wineListResponse = yield axios.get('/api/wine');
    yield put ({type: 'SET_WINE_LIST', payload: wineListResponse.data});
}



export default wineListSaga;