import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Linux from './components/Linux.js';
import Header from './components/layout/header.js'
import Todos from './components/Todo.js';
import AddTodo from './components/AddTodo.js';
import about from './components/pages/about';
/* import uuid from 'uuid'  */
import axios from 'axios'


class App extends React.Component{
 state = {
   todos:[]
 }

 componentDidMount(){
   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({todos: res.data}))
 }

 // Toggle Complete
 markComplete = (id) => {
   this.setState({ todo: this.state.todos.map(todo =>{
     if(todo.id === id)
     {todo.completed = !todo.completed}
     return todo;
   })});
 }
 // delete Todo
 delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState ({todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
 }
 //Add Todo
 addTodo = (title) =>{axios.post('https://jsonplaceholder.typicode.com/todos',{
     title,
     completed: false
   }) .then(res => this.setState({todos: [...this.state.todos, res.data]}))

 }

  render () {
    /* console.log(this.state.todos); */
    return (
      <Router>
      <div className="App">
        <div className="container">
        <Header/>
        <Route exact path="/" render={props => (
          <React.Fragment>
        <AddTodo addTodo ={this.addTodo}/>
      <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo ={this.delTodo}/>
          </React.Fragment>
        )}/>
      <Linux linux={this.state.linux}/>
      <Route exact path='/about' component={about}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;

//orig code
/* function App() {
  return (
    <div className="App">
      <Todos />
    </div>
  );
}
 */