import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandiPage from './componente/LandiPage';
import Home from './componente/Home';
import CreatedActivity from "./componente/CreatedActivity"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
          <Route exact path="/" component={LandiPage}/>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/Create" component={CreatedActivity}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
