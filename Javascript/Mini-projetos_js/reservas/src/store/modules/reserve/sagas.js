import {call} from 'redux-saga'
import React from 'react';
import api from '../../../services/api'

 function* addToReserve() {
    const response =  yield call(api.get, `trips/${id}`)
 
}