import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandiPage from './componente/LandiPage';
import Home from './componente/Home';
import CreatedActivity from "./componente/CreateActivity/CreatedActivity"
import Details from "./componente/Details"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
          <Route exact path="/" component={LandiPage}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/create" component={CreatedActivity}/>
          <Route exact path="/home/:id" component={Details}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
