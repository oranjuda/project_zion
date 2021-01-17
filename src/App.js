import './App.css';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import LoginFile from './ClassComponents/LoginFile';
import Registration from './ClassComponents/Registration';
import Main from './ClassComponents/Main';
import Notes from './ClassComponents/Notes';



function App() {
  return (
    <div className="App">
      <Link to="/">LOg|</Link>
      <header className="App-header">
        <Switch>
          <Route exact path=  "/" component = {LoginFile}/>
          <Route  path=  "/Main/" component = {Main}/>
          <Route  path=  "/Notes" component = {Notes}/>
          <Route  path=  "/Registration" component = {Registration}/>
        </Switch>
        
        
      
      </header>
    </div>
  );
}

export default withRouter(App);
