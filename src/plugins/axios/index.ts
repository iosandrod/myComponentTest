import Axios from './Axios'

const http = new Axios({
  baseURL: '/api',
  timeout: 10000,
})
export default () => {
  return http
}
export { http }
