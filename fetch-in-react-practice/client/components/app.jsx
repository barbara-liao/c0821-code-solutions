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
    const index = this.state.todos.findIndex(todo => todo.todoId === todoId);
    const targetTodo = this.state.todos[index];
    const update = { isCompleted: !targetTodo.isCompleted };
    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {
        const newTodos = [...this.state.todos];
        newTodos.splice(index, 1, data);
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
