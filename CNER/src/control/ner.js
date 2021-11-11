import axios from 'axios'
let base = ''

export function getResult (str) {
    let config = {
        params: {
            'inputStr': str
        }
    }
    return axios.get(base, config)
}