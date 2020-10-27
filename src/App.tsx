import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { VillagerDirectory } from './Components/containers/VillagerDirectory/VillagerDirectory';
import { DetailedVillager } from './Components/containers/DetailedVillager/DetailedVillager'


function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/villagers" component={VillagerDirectory}/>
        <Route exact path="/villagers/:id" component={DetailedVillager} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
