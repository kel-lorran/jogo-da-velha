import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './Pages/Home';
import PlayGround from './Pages/PlayGround/PlayGround';
import './App.css';

function App() {
  return (
   <Router>
     <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/to-play">
        <PlayGround />
      </Route>
     </Switch>
   </Router>
  );
}

export default App;
