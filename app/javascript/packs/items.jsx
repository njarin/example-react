import React from 'react'
import ReactDOM from 'react-dom'
import { ItemList } from './item_list'
const $ = require ('jquery')

export default class Items extends React.Component {
  constructor() {
    super()
    this.state = {
      items: []
    }
  }

  componentDidMount() {
        $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) })
    }

  render () {
    console.log(this.state)
    return (
      <div>
        <h1>This is where a list of items will be...</h1>
        <ItemList items={this.state.items} />
      </div>
    )
  }
}

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Items />,
//     document.body.appendChild(document.createElement('div')),
//   )
// })
