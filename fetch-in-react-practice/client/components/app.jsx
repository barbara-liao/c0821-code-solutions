import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(response => response.json())
      .then(data => {
        this.setState({
          todos: data
        });
      })
      .catch(err => console.error('Error!', err));
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => this.setState({
        todos: this.state.todos.concat(data)
      }))
      .catch(err => console.error('Error!', err));
  }

  toggleCompleted(todoId) {
    const newTodos = JSON.parse(JSON.stringify(this.state.todos));
    const index = newTodos.findIndex(todo => todo.todoId === todoId);
    const updateTodo = newTodos[index];
    updateTodo.isCompleted = !updateTodo.isCompleted;
    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify(updateTodo),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {
        newTodos.splice(index, 1, updateTodo);
        this.setState({
          todos: newTodos
        });
      }
      )
      .catch(err => console.error('Error!', err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
