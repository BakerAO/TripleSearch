import { FETCH_GOOGLE } from '../actions';

export default function(state=[], action){
    switch (action.type){
        case FETCH_GOOGLE:
            return [ action.payload.data, ...state ];
    }

    return state;
}