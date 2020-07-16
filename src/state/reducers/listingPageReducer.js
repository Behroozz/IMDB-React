import { get } from 'lodash'

import { DATA_FETCH } from '../../config/constants.js'

export const initialState = {
  isLoading: false,
  data: [],
  hasError: false,
  total_pages: 0,
  per_page: 0,
  total: 0,
  page: 0
}

export default function ListingReducer(state= initialState, action) {
  switch(action.type) {
    case DATA_FETCH.SUCCESS: {
      return {
        ...state,
        data: get(action, 'payload.response.data'),
        total_pages: get(action, 'payload.response.total_pages'),
        per_page: get(action, 'payload.response.per_page'),
        total: get(action, 'payload.response.total'),
        page: get(action, 'payload.response.page'),
        term: get(action, 'payload.term')
      }
      
    }
    case DATA_FETCH.FAILURE: {

    }
    case DATA_FETCH.LOADING: {
      return {
        ...state,
        isLoading: true,
        term: get(action, 'payload.term')
      }

    }
    default:
      return state
  }
}