import { DATA_FETCH } from '../../config/constants'
export function getItems(term, page) {
  return {
    type: DATA_FETCH.REQUEST,
    payload: {
      term, 
      page
    }
  }
}