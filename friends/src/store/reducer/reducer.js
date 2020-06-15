import {FETCH_FRIEND_START, FETCH_FRIEND_SUCCESS, FETCH_FRIEND_FAILURE, ADD_FRIEND_START, ADD_FRIEND_SUCCESS, ADD_FRIEND_FAILURE} from '../action/index';

const initialState = {
    isFetching: false,
    person:[],
    error: '',
}

export const reducer = (state = initialState, action) => {
    // console.log(state)
    switch(action.type){
        case FETCH_FRIEND_START:
        return {
            ...state,
            isFetching:true
        };
        case FETCH_FRIEND_SUCCESS:
            return{
                ...state,
                isFetching:false,
                person:action.payload,   
            }; 
            case FETCH_FRIEND_FAILURE:
                return {
                    ...state,
                    isFetching:false,
                    error:action.payload
                }
                case ADD_FRIEND_START:
                     return {
                        ...state,
                     isFetching:true
        };
                    case ADD_FRIEND_SUCCESS:
                         return{
                          ...state,
                           isFetching:false,
                             person:[...state.person, action.payload],   
            }; 
                     case ADD_FRIEND_FAILURE:
                         return {
                      ...state,
                      isFetching:false,
                     error:action.payload
                }
                default:
                    return state
    }
}