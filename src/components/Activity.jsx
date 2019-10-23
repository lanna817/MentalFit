import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Render from './Render';
import image from '../images/benchnote.jpg';



class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      activity: '',

    }
  }


  handleChange = (event) => {
    event.preventDefault()
    let value = event.target.id
    if (event.target.id === '') {
      this.setState({
        type: value
      })
    }
  }

  handleClick = async (event) => {
    event.preventDefault()
    let type = event.target.id
    const response = await axios.get(`http://www.boredapi.com/api/activity/?type=${type}`)
    console.log(response.data.type)
    const activity = response.data.activity
    this.setState({
      activity
    })
  }

  render() {

    return (

      <div>


      
        <Render activity={this.state.activity} type={this.state.type} handleChange={this.handleChange} handleClick={this.handleClick} />
        <img id='bench' src={image} width="100%" height='100%' alt='note on bench' />

      </div>
    )

  }
}

export default Activity;