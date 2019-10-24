import React from 'react';
import music from '../assets/relaxmusic.mp3';
import rain from '../assets/rain.mp3';
import energy from '../assets/upbeat.mp3';


class Sound extends React.Component {

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

  audioRain = new Audio(rain)

  toggleOnRain = () => {
    this.setState({
      play: !this.state.play
    }, () => {
      this.state.play ? this.audioRain.play() : this.audioRain.pause()

    })
  }

  audioEnergy = new Audio(energy)

  toggleOnEnergy = () => {
    this.setState({
      play: !this.state.play
    }, () => {
      this.state.play ? this.audioEnergy.play() : this.audioEnergy.pause()

    })
  }




  render() {
    return (
      <div className='sound-btn'>
        <button id='relax-btn' onClick={this.toggleOn} >{this.state.play ? 'Pause' : 'Relax'}</button>
        <button id='rain-btn' onClick={this.toggleOnRain} >{this.state.play ? 'Pause' : 'Rain'}</button>
        <button id='energy-btn' onClick={this.toggleOnEnergy} >{this.state.play ? 'Pause' : 'Energy'}</button>

      </div>
    )
  }
}

export default Sound;

