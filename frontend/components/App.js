import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todos </h1>
        <ul>
          <li> plant the first seeds of the new year</li>
          <li> clean up front yard</li>
          <li> go to the gym</li>
        </ul>
        <form>
          <input/>
          <button>Add</button>
        </form>
        <button>Clear</button>

      </div>
    )
  }
}
