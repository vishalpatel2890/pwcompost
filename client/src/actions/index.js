import axios from 'axios'
import { FETCH_USER } from '../constants/appConstants'

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({ type: FETCH_USER, payload: res.data })
}

export const submitUser = (values, history) => async dispatch => {
  const res = await axios.post('/api/service', values)

  history.push('/dashboard')
}
