import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home';
import Teams from './Components/Pages/Teams';
import Players from './Components/Pages/Players';
import TeamsDetail from './Components/Pages/TeamsDetail';
import PlayerDetail from './Components/Pages/PlayerDetails';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={ Home } path="/" exact></Route>
        <Route component={ TeamsDetail } path="/Teams/:id"></Route>
        <Route component={ Teams } path="/Teams"></Route>
        <Route component={ PlayerDetail } path="/Players/:id"></Route>
        <Route component={ Players } path="/Players"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
