import React from 'react'
import { get } from 'lodash'
import { connect } from 'react-redux'
import ItemTile from '../itemTile/ItemTile.jsx'

export const ItemGrid = ({ items }) => {
  return(
    <React.Fragment>
      <div className="flex flex-wrap w-full bg-grey-100 pl-8 pt-8">
        {
          items.length > 0 && items.map(item => <ItemTile item={item}/>)
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