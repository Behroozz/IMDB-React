import React, { useCallback } from 'react'
import { get } from 'lodash'
import { connect } from 'react-redux'
import ItemTile from '../itemTile/ItemTile.jsx'
import { deleteItem } from '../../../actions/itemActions'

export const ItemGrid = ({ items, dispatch}) => {
  const handleClick = useCallback((id) => {
    console.log(`Movie with id ${id} clicked.`)
    deleteItem(id)(dispatch)
  }, [])
  
  return(
    <React.Fragment>
      <div className="flex flex-wrap w-full bg-grey-100 pl-8 pt-8">
        {
          items.length > 0 && items.map(item => <ItemTile key={get(item, 'imdbID')} handleClick={handleClick} item={item}/>)
        }
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.data,
  }
}

export default React.memo(connect(mapStateToProps)(ItemGrid))