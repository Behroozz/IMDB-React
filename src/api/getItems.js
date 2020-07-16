import axios from 'axios'
import { get } from 'lodash' 
import { DATA_FETCH } from '../config/constants'

function getItems(term, page=1) {
  return async (dispatch) => {
    try {
      dispatch({
        type: DATA_FETCH.LOADING,
        payload: {
          term
        }
      })
      const result = await axios.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${term}&page=${page}`)
      dispatch({
        type: DATA_FETCH.SUCCESS,
        payload: {
          response: get(result, 'data'),
          term
        }
      })
      return result
    } catch(ex) {
      dispatch({
        type: DATA_FETCH.FAILURE
      })
    }
  }
}

export default getItems