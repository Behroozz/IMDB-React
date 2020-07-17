import React, { useContext } from 'react'
import { connect } from 'react-redux'
import { getItems } from '../../../actions/itemActions'
import { ThemeContext } from '../../../config/theme'


export const Pagination = ({ page, total_pages, term, dispatch }) => {
  const nextPage = () => {
    if(page < total_pages) {
      const nextPage = page + 1
      getItems(term, nextPage)(dispatch)
    }
  }

  const prevPage = () => {
    if(page > 1) {
      const prevPage = page -1
      getItems(term, prevPage)(dispatch)
    }
  }

  const theme = useContext(ThemeContext)

  return(
  <React.Fragment>
    {total_pages > 0 && <div className="flex flex-wrap w-full bg-grey-100 pl-8">
      <span>
        <button 
          className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ${theme.background}`}
          onClick={() => prevPage()}>Previous Page</button>
      </span>
      <span className="pl-2">
        <button
          className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ${theme.background}`}
          onClick={() =>  nextPage()}>Next Page</button>
      </span>
    </div>}
  </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    page: parseInt(state.page),
    total_pages: state.total_pages,
    term: state.term
  }
}

export default React.memo(connect(mapStateToProps)(Pagination))