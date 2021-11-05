import './App.css';
import Login from './Components/Login'
import Header from './Components/Header';
import {Route, Routes, Switch} from 'react-router-dom'
import Register from './Components/Register';

const App = () => {
  return (
    <div className="App">
      <Header />

      <Switch>
      <Route  path='/Login' component={Login}></Route>
        <Route  path='/register' component={Register}></Route>
      </Switch>
    </div>
  );
}

export default App;
