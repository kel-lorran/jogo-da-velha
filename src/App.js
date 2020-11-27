import React, { useState, useEffect } from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './Pages/Home';
import PlayGround from './Pages/PlayGround';
import './App.scss';

import { getHistory } from './utils/historyActions'

function App() {
  const [rankingData, setRankingData] = useState([])

  useEffect(async () => setRankingData(await getHistory()), [])

  return (
   <Router>
     <Switch>
      <Route exact path="/">
        <Home rankingData={rankingData} />
      </Route>
      <Route path="/to-play">
        <PlayGround rankingData={rankingData} />
      </Route>
     </Switch>
   </Router>
  );
}

export default App;
