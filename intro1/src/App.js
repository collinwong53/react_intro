import React, {Component} from 'react';
import './App.css';
import TodoItems from './components/todoitem'
import TodoList from './components/todolist'
import TodoCreate from './components/todoCreate'
import {Link, Switch, Route} from 'react-router-dom'

const todoItems = [
  {
    name: 'Get Eggs',
    description: 'get eggs, the good ones',
    dueDate: "2018-02-20",
    complete: false
  },
  {
    name: 'Get Sausage',
    description: 'Delicious',
    dueDate: "2018-02-20",
    complete: true
  }
]
class App extends Component {
  render() {
    return (
        <div className="App">
          <ul>
            <li>
              <Link to="/"> List </Link>
            </li>
            <li>
              <Link to="/create"> Create </Link>
            </li>
          </ul>
          <Switch>
            <Route path="/create" component={(props)=><TodoCreate list={todoItems} {...props}/>}/>
            <Route exact path="/:index?" component={(props)=><TodoList list={todoItems} {...props}/>}/>
          </Switch>
        </div>
    );
  }
}

export default App;
