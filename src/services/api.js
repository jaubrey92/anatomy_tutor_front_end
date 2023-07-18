import Axios from 'axios'

export const BASE_URL = 'https://anatomy-tutor-44508058b6f7.herokuapp.com/'

const Client = Axios.create({ baseURL: BASE_URL })

export default Client
