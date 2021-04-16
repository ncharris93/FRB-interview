import './App.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import React from 'react'

import { UserContainer } from './containers/UserContainer'
import { UserForm } from './components/pages/UserForm'
import { UserView } from './components/pages/UserView'
import { UserContextProvider } from './hooks/Users/user.context'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserContextProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                <UserContainer />
              </Route>
              <Route path="/user-form">
                <UserForm />
              </Route>
              <Route path="/user-view">
                <UserView />
              </Route>
            </Switch>
          </Router>
        </UserContextProvider>
      </header>
    </div>
  )
}

export default App
