import React from 'react'
import TodoList from './TodoList';
import Form from './Form'



   

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
      completed: true
    }
    
    // // add todos here to this array list
    ]
  }
}
handleAdd = (name) => {
  const newTodo = {
    name: name,
    id: Date.now(),
    completed: false
  };
  this.setState({
    ...this.state, todos:[...this.state.todos, newTodo ]
  });
}

handleClear = () => {
this.setState({
  ...this.state, todos:this.state.todos.filter(todo => { 
    return (todo.completed === false);
  })
});

handleToggle = (clickedId) => {
  this.setState({
    ...this.state, todos: this.state.todos.map(todo=> {
      if (todo.id === clickedId) {
        return {
          ...todo, 
          completed: !todo.completed
        }
      }
        return todo;
     
    })
  })
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
        <TodoList  handleToggle={this.handleToggle} key={todos.id} todos={todos} />
        <Form  handleAdd={this.handleAdd}/>

       
        <button onClick={this.handleClear} >Clear</button>

      </div>
    )
  }
}
