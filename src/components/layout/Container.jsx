import React from 'react'
import Header from '../elements/header/Header.jsx'
import ItemGrid from '../elements/itemGrid/ItemGrid.jsx'
import Pagination from '../elements/pagination/Pagination.jsx'

const Container = () => {
  return(
    <div className="flex flex-wrap gb-gray-200">
      <Header/>
      <Pagination/>
      <ItemGrid/>
    </div>
  )
}

export default React.memo(Container)