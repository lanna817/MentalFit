import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { getQuote } from './services/api-helper';
import Home from './components/Home';
import Button from './components/Button';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      quoteOfDay: []
    }

  }

  componentDidMount = async () => {
    let quotes = await getQuote()
    this.setState({ quoteOfDay: quotes })
  }


  render() {
    return (
      <div className="app">
        <Home qod={this.state.quoteOfDay} />
        <Button />

      </div>
    );
  }
}
export default App;
