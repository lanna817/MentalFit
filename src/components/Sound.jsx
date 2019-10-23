import React from 'react';
import music from '../assets/relaxmusic.mp3';


class Sound extends React.Component{

  state = {
    play: false
  }

  audio = new Audio(music)

  toggleOn = () => {
    this.setState({
      play: !this.state.play
    }, () => {
        this.state.play ? this.audio.play() : this.audio.pause()
    
    })
  }



  render() {
    return (
      
      <div>
        <button id='relax-btn' onClick={this.toggleOn} >{this.state.play ? 'Pause' : 'Relax' }</button>
      </div>
    )
  }
}

export default Sound;

