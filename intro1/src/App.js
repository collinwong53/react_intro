import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';

const Home = (props) => {
  return (
    <div>Hello my name is Collin Wong</div>
  )
}
const Skills = (props) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/skills/Html">HTML</Link>
        </li>
        <li>
          <Link to="/skills/Css">CSS3</Link>
        </li>
        <li>
          <Link to="/skills/Javascript">JAVASCRIPT</Link>
        </li>
      </ul>
    </div>
  )
}

const Html = (props) => {
  return (
    <div>
      <li>
        <Link to="/skills/CSS3">CSS3</Link>
      </li>
      <li>
        <Link to="/skills/JAVASCRIPT">JAVASCRIPT</Link>
      </li>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, ad rerum
        soluta quidem omnis, similique ducimus hic culpa maiores ipsa, minus amet iusto
        qui consequatur consequuntur quaerat illum dolore exercitationem?
      </p>
    </div>
  )
}
const Css = (props) => {
  return (
    <div>
      <li>
        <Link to="/skills/HTML">HTML</Link>
      </li>
      <li>
        <Link to="/skills/JAVASCRIPT">JAVASCRIPT</Link>
      </li>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.Distinctio, ad rerum
        soluta quidem omnis, similique ducimus hic culpa maiores ipsa, minus amet iusto
        qui consequatur consequuntur quaerat illum dolore exercitationem ?
      </p>

    </div>
  )
}

const Javascript = (props) => {
  return (

    <div>
      <li>
        <Link to="/skills/HTML">HTML</Link>
      </li>
      <li>
        <Link to="/skills/CSS3">CSS3</Link>
      </li>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, ad rerum
        soluta quidem omnis, similique ducimus hic culpa maiores ipsa, minus amet iusto
        qui consequatur consequuntur quaerat illum dolore exercitationem?
      </p>
    </div >
  )
}

const Experience = (props) => {
  // let message = ''; if(props.match.params.message){   message =
  // props.match.params.message; }
  return (
    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, ad
      rerum soluta quidem omnis, similique ducimus hic culpa maiores ipsa, minus amet
      iusto qui consequatur consequuntur quaerat illum dolore exercitationem?</div >
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/skills" component={Skills}/>
          <Route exact path="/experience" component={Experience}/>
          <Route exact path="/skills/Html" component={Html}/>
          <Route exact path="/skills/Css" component={Css}/>
          <Route exact path="/skills/Javascript" component={Javascript}/>
        </Switch>
      </div>
    );
  }
}

export default App;
