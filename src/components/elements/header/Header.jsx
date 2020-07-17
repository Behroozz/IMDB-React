import React, { useRef, useContext } from 'react'
import { get } from 'lodash'
import SearchHistory from '../history/SearchHistory.jsx'
import { connect } from 'react-redux'
import { getItems } from '../../../actions/itemActions'
import { ThemeContext } from '../../../config/theme'

const Header = ({ dispatch, term }) => {
  const inputRef = useRef(null)

  const fetchItems = (e) => {
    e.preventDefault()
    const term = inputRef.current.value
    getItems(term, 1)(dispatch)
  }

  const theme = useContext(ThemeContext)

  return(
    <div className="flex flex-wrap w-full bg-grey-100 p-4">
      <h1 className={`p-4 block font-bold md:text-right mb-1 md:mb-0 text-xl ${theme.textColor}`}>IMDB</h1>
      <form className="p-4" onSubmit={(e)=> fetchItems(e)}>
        <input className="rounded bg-gray-200 shadow-inner p-1" 
          placeholder="Enter movie title"
          ref={inputRef}
        />
        <button className= {`inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ml-6 ${theme.background}`}
          onClick={(e) => fetchItems(e)}>Search</button>
      </form>
      <SearchHistory term={term} reduxDispatch={dispatch}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    term: state.term
  }
}
export default React.memo(connect(mapStateToProps)(Header))