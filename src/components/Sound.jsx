import React from 'react';
import music from '../assets/relaxmusic.mp3';
import rain from '../assets/rain.mp3';
import energy from '../assets/upbeat.mp3';



class Sound extends React.Component {

  state = {
    play: false,
    playRain: false,
    playEnergy: false,

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
      playRain: !this.state.playRain
    }, () => {
      this.state.playRain ? this.audioRain.play() : this.audioRain.pause()

    })
  }

  audioEnergy = new Audio(energy)

  toggleOnEnergy = () => {
    this.setState({
      playEnergy: !this.state.playEnergy
    }, () => {
      this.state.playEnergy ? this.audioEnergy.play() : this.audioEnergy.pause()

    })
  }




  render() {
    return (
      <div className='sound-btn'>

        <button
          id='relax-btn'
          onClick={this.toggleOn}> {this.state.play ? 'Pause' : 'Meditate'}

        </button>
        <button id='rain-btn' onClick={this.toggleOnRain} >{this.state.playRain ? 'Pause' : 'Relax'}</button>
        <button id='energy-btn' onClick={this.toggleOnEnergy} >{this.state.playEnergy ? 'Pause' : 'Upbeat'}</button>

      </div>
    )
  }
}

export default Sound;

