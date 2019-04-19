import {actionsType} from '../actionType/action';

const initialState = {
    data: [],
}

const addData = (state = initialState, action) =>{
    // const {type, text} = action;
    let newData = [...state.data];

    switch (action.type) {
        case actionsType.ADD_DATA:
            newData.push(action.text)
            return Object.assign({}, state, {data: newData})
        
        case actionsType.EDIT_DATA:
            newData[action.index] = action.text;
            return Object.assign({}, state, {data: newData})
 
        case actionsType.DELETE_DATA:
            newData.splice(action.index, 1);
            return Object.assign({}, state, {data: newData})
            
        case actionsType.RENDER_DATA_FROM_SAGA:
            newData = action.data;
            return Object.assign({}, state, {data: newData})
        case actionsType.RENDER_NEWS_DATA:
            newData = action.data;
            return Object.assign({}, state, {data: newData})    
                
        default:
            return state;        
    }
}

export default addData;