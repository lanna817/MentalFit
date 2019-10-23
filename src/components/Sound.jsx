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
        <button onClick={this.toggleOn} >{this.state.play ? 'pause' : 'play' }</button>
      </div>
    )
  }
}

export default Sound;

