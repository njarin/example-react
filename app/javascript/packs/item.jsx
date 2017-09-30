import React from 'react'
import PropTypes from 'prop-types'

const Item = ({item}) =>
  <div className='item'>
    <h3>{item.name}</h3>
    <p>{item.description}</p>
  </div>

export default Item
