import getAPIData from './getAPIData'
import getNewsData from './getNewsData'
import {all} from 'redux-saga/effects'

export default function* rootSaga() {
    yield getAPIData;
    yield getNewsData;
}