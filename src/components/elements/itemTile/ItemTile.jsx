import React, {useContext, useState } from 'react'
import { get } from 'lodash'
import { ThemeContext } from '../../../config/theme'

const ItemTile = ({item, handleClick}) => {
  const theme = useContext(ThemeContext)
  const [ selected, setSelected ] = useState(false)

  const handleSelect = () => {
    setSelected(!selected)
  }

  return(
    <div className={`w-full md:w-1/3 max-w-sm rounded overflow-hidden shadow-lg ${theme.cardBackground}`}>
      <div className="p-4" onClick={() => handleSelect()}>
        <div className="flex justify-between">
          <h4 className={"text-md"}><span className={`pr-1 ${selected ? theme.selectedCardBackground: ''}`}>Title:</span> { get(item, 'Title')}</h4>
          <div className="text-xs" onClick={() => handleClick(get(item, 'imdbID'))}>X</div>
        </div> 
        <p><span className={`pr-1 ${selected ? theme.selectedCardBackground: ''}`}>Year:</span> { get(item, 'Year')}</p>
        <p><span className={`pr-1 ${selected ? theme.selectedCardBackground: ''}`}>ImdbID:</span> { get(item, 'imdbID')}</p>
      </div>
    </div>
  )
}

export default ItemTile