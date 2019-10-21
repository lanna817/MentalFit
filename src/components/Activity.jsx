import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      activities: {}
    }
  }


  async componentDidMount() {
    const response = await axios.get('http://www.boredapi.com/api/activity/')
    const activity = response.data
    this.setState({
      activities: activity
    })
  }



  render() {
    let active = this.state.activities
    // console.log(this.state)
  return (
    <div>
      <h1>{active.activity}</h1>



</div>
  )

}
}

export default Activity;