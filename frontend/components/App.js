import React from 'react'
import TodoList from './TodoList';



   

export default class App extends React.Component {
// create state here second to be able to change the list items
constructor() {
  super();
  this.state = {
    todos: [
      {
      name: 'Organize Garage',
      id: 1528817077286, // could look different, you could use a timestamp to generate it
      completed: false
    },
    {
      name: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
    
    // // add todos here to this array list
    ]
  }
}




  render() {
    // add the todos to state so it renders 
    const { todos } = this.state;
    // check to see if it works
    console.log(todos);
    return (
      <div>
        {/* create the frame work here first */}
        <h1>Todos </h1>
        <TodoList key={todos.id} todos={todos} />


        <form>
          <input/>
          <button>Add</button>
        </form>
        <button>Clear</button>

      </div>
    )
  }
}
