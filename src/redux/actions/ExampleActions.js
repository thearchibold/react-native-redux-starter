import {TYPES} from "./ACTION_TYPES"


export const exampleAction = (input) => {
    return {
        type:TYPES.EXAMPLE,
        payload:input
    }
}
