import React from 'react'
import Sound from 'react-sound';

import Airhorn from '../../assets/edward.png';
import Enya from '../../assets/donkeys.wav';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false
    }
  }

  render () {
    return (
      <div className={'landing-container'}>
        <div
          className={'landing-content'}
          onClick={() => {
            this .setState({
              play: !this.state.play
            })
          }}
        >
          <img src={Airhorn}/>
        </div>
        <Sound
          url={Enya}
          playStatus={this.state.play ? "PLAYING" : "PAUSED"}
          volume={100}
          autoLoad
          loop
        />
      </div>
    )
  }

};

export default Landing