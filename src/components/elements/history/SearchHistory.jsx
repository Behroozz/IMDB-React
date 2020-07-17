import React, { useReducer, useEffect, useContext } from 'react'
import { SEARCH_HISTORY } from '../../../config/constants'
import { ThemeContext } from '../../../config/theme'
import { getItems } from '../../../actions/itemActions'

const SearchHistory = ({term, reduxDispatch}) => {
  const initialState = {
    history: [],
    selected: ''
  }

  useEffect(() => {
    if(term) {
      dispatch({
        type: SEARCH_HISTORY.ADD,
        payload: {
          term
        }
      })
    }
  }, [term])

  const onHistoryClick = (search) => {
    getItems(search, 1)(reduxDispatch)
    dispatch({
      type: SEARCH_HISTORY.SELECT,
      payload: {
        selected: search
      }
    })
  }

  function reducer(state, action) {
    switch(action.type) {
      case SEARCH_HISTORY.ADD: {
        if(!state.history.includes(action.payload.term)) {
          return {
            ...state,
            history: [
              ...state.history,
              action.payload.term
            ]
          }
        } else {
          return {
            ...state
          }
        }
      }
      case SEARCH_HISTORY.SELECT: {
        return {
          ...state,
          selected: action.payload.selected
        }
      }
      default: {
        return state
      }
    }
  }

  const [ state, dispatch ] = useReducer(reducer, initialState)
  const theme = useContext(ThemeContext)

  const { history, selected } = state
  return(
    <ul className="flex items-center w-full md:w-1/3 ml-4">
      {history && history.reverse().slice(0,5).map((search, idx) => 
        <li onClick={() => onHistoryClick(search)} key={idx} className="md:mr-4 mr-2">
          <span className={`${ selected===search? 'text-grey-600' : '' }${theme.textColor}`}>{search}</span>
        </li>)}
    </ul>
  )
}

export default SearchHistory
