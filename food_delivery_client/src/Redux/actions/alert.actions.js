import { alertConstants } from '../constants/alert'

export const AlertAction = {
    success,
    error,
    clear
}

function success(message) {
    return{
        type : alertConstants.SUCCESS,
        payload : message
    }
}
function error(message) {
    return{
        type : alertConstants.ERROR,
        payload : message
    }
}
function clear(message) {
    return{
        type : alertConstants.CLEAR,
        payload : message
    }
}