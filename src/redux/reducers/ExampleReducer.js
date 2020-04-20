import {TYPES} from "../actions/ACTION_TYPES"
import {exampleData} from "../store"


const exampleReducer = (state = exampleData, action) => {
    switch (action.type) {
        case TYPES.EXAMPLE:
            return {
                ...state,
                data:action.payload
            };

        default:
            return {...state}
    }
};

export {exampleReducer}
