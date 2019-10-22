import React from 'react';
import './App.css';
import logo from './logo.svg';
import { Route, Link } from 'react-router-dom';
import { getQuote, getMusic } from './services/api-helper';
import Intro from './components/Intro';
import Site from './components/Site';
import Activity from './components/Activity';
import Nav from './components/Nav';
import Relax from './components/Relax';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      quoteOfDay: [],


    }

  }

  componentDidMount = async () => {
    let quotes = await getQuote()
    this.setState({ quoteOfDay: quotes })
  }


  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (<Intro qod={this.state.quoteOfDay} />)} />

        <main>   
          <Route path='/site' render={() => (<Site /> )} />
        {/* <Nav /> */}
          <Route path='/activity' render={(props) => (<Activity activities={props.match.params.activities} />)} />
          <Route path='/relax' render={() => (<Relax />)} />
        </main>
      </div>
    );
  }
}
export default App;
