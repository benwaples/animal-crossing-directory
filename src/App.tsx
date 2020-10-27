import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { VillagerDirectory } from './Components/containers/VillagerDirectory/VillagerDirectory';
import { DetailedVillager } from './Components/containers/DetailedVillager/DetailedVillager'
import Header from './Components/presentation/Header/Header';


function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/villagers" component={VillagerDirectory}/>
        <Route exact path="/villagers/:_id" component={DetailedVillager} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
