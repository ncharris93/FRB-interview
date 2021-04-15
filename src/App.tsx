import './App.css'
import { UserContainer } from './containers/UserContainer'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useHistory,
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/">
              <UserContainer />
            </Route>
            <Route path="/user-form">{/* <UserForm /> */}</Route>
            <Route path="/user-view">{/* <UserView /> */}</Route>
          </Switch>
        </Router>
      </header>
    </div>
  )
}

export default App
