import { LOGIN } from './types'

export const loginAction = (data) => {
    return {
        type: LOGIN,
        payload: data
    }
}