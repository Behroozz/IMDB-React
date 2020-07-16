import React, { useRef } from 'react'
import { connect } from 'react-redux'
import getItems from '../../../api/getItems'

const Header = ({ dispatch }) => {
  const inputRef = useRef(null)

  const fetchItems = (e) => {
    e.preventDefault()
    const term = inputRef.current.value
    getItems(term, 1)(dispatch)
  }

  return(
    <div className="flex flex-wrap w-full bg-grey-100 p-4">
      <h1 className="p-4 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 text-xl">IMDB</h1>
      <form className="p-4" onSubmit={(e)=> fetchItems(e)}>
        <input className="rounded bg-gray-200 shadow-inner p-1" 
          placeholder="Enter movie title"
          ref={inputRef}
        />
        <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ml-6" 
          onClick={(e) => fetchItems(e)}>Search</button>
      </form>
    </div>
  )
}

export default React.memo(connect()(Header))