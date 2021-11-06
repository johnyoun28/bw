import './App.css';
import Login from './Components/Login'
import Header from './Components/Header';
import {Route, Switch} from 'react-router-dom'
import Register from './Components/Register';

const App = () => {
  return (
    <div className="App">
      <Header/>

      <Switch>
        <Route path='/register' component={Register}></Route>
      <Route path='/' component={Login}></Route>
      </Switch>
    </div>
  );
}

export default App;
