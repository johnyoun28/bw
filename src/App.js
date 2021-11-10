import './App.css';
import {Route, Switch, Link} from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'
import Dashboard from './Components/Dashboard'
import Register from './Components/Register';
import Login from './Components/Login'
import TechDetails from './Components/TechDetails'

const App = () => {
  return (
    <div className="App">

      <Link to='/login'>Login</Link>
      < br />
      <Link to='/register'>Register</Link>

      <Switch>
        <PrivateRoute path='/tech/:id' component={TechDetails}></PrivateRoute>
        <PrivateRoute path='/dashboard' component={Dashboard}></PrivateRoute>
        
      <Route path='/register' component={Register}></Route>
      <Route path='/' component={Login}></Route>

      </Switch>
    </div>
  );
}

export default App;
