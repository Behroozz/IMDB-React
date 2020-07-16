import React from 'react'
import { get } from 'lodash';

const ItemTile = ({item}) => {
  return(
    <div className="w-full md:w-1/3 max-w-sm rounded overflow-hidden shadow-lg pr-4">
      <div className="p-4">
        <h4 className="text-md"><span className="pr-1">Title:</span> { get(item, 'Title')}</h4>
        <p><span className="pr-1">Year:</span> { get(item, 'Year')}</p>
        <p><span className="pr-1">ImdbID:</span> { get(item, 'imdbID')}</p>
      </div>
    </div>
  )
}

export default ItemTile