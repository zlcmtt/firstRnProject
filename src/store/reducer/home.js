import { USERNAME } from "../actionTypes";
const name = 'zs'
export default getName = (state = name, action) => {
    switch (action.type) {
        case USERNAME:
           return action.name
        default:
            return state
    }
}