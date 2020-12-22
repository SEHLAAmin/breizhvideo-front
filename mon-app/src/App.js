import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Home from './Home'
import BodyCards from './BodyCards'
import Data from './Data'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div>

    <Home/>
    <BodyCards />
    
    
    </div>
    /*<Router>
    <div className="App">
    <Home />
    <Route exact path="/Bodycards" component={Data}/>
    </div>
    <BodyCards/>
    {Data.map((posdetail , index) => {
      return <h1>{
        posdetail.name
      }</h1>
    })}
    </Router>*/
    
  );
}

export default App;
