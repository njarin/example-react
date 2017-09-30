import React from 'react'
import Item from './item'

export const ItemList = ({items}) =>
  <div>
    {items.map(function(item) {
      return (
        <Item item={item} key={item.id} />
      )
    })}
  </div>
