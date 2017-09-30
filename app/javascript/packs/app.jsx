import React from 'react'
import ReactDOM from 'react-dom'
import Items from './items'
const $ = require ('jquery')


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <h1>
          Hello, it worked!
        </h1>
        {/* <Navbar /> */}
        <Items />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
