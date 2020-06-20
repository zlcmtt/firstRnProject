import { USERNAME } from "../actionTypes";

export const setUserName = (name) => {
    return (dispatch) => {
      setTimeout(() => {
          dispatch({
              type:USERNAME,
              name
          })
      },3000)
    }
}