import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import FriendForm from './components/FriendForm'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <ProtectedRoute exact path="/protected" compontent={FriendForm} />
          <Route path="/login" compontent={Login} />
          <Route compontent={Login} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
