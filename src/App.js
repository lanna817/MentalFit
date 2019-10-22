import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { getQuote, getActive } from './services/api-helper';
import Intro from './components/Intro';
import Site from './components/Site';
import Activity from './components/Activity';
import Nav from './components/Nav';



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
       
          <Nav />
        <Route exact path='/' render={() => (<Intro qod={this.state.quoteOfDay} />)} />
        <main>
        <Route path='/site' render={() => (<Site />)} />
        <Route path='/activity'render={(props) => (<Activity activities={props.match.params.activities} />)} />
        </main>
      </div>
    );
  }
}
export default App;
