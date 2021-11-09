import './App.css';
import Login from './Components/Login'
import Header from './Components/Header';
import {Route, Switch} from 'react-router-dom'
import Register from './Components/Register';
import PrivateRoute from './Components/PrivateRoute'
import Dashboard from './Components/Dashboard'

const App = () => {
  return (
    <div className="App">
      <Header/>

      <Switch>
        <PrivateRoute path='/dashboard' component={Dashboard}></PrivateRoute>

        <Route path='/register' component={Register}></Route>
      <Route path='/' component={Login}></Route>

      </Switch>
    </div>
  );
}

export default App;
