import React from "react";
import Sound from "react-sound";

import Airhorn from "../../assets/edward.png";
import Enya from "../../assets/donkeys.wav";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false
    };
  }

  render() {
    return (
      <div className={"landing-container"}>
        <div className={"landing-content"}>
          <h1>We're having a party!</h1>
          <h2>August 10th at BRIX in Oakland</h2>
          <a
            href={
              "https://www.eventbrite.com/e/sparkulum-donkus-tickets-65942912025?aff=ebdssbdestsearch"
            }
            className={"landing-button"}
          >
            <button>Get tickets!</button>
          </a>
          <a
            href={"https://www.facebook.com/events/344655956450726/"}
            className={"landing-button-info"}
          >
            <button>More info</button>
          </a>

          {/* <img onClick={() => {
            this .setState({
              play: !this.state.play
            })
          }} src={Airhorn}/> */}
        </div>
        <Sound
          url={Enya}
          playStatus={this.state.play ? "PLAYING" : "PAUSED"}
          volume={100}
          autoLoad
          loop
        />
      </div>
    );
  }
}

export default Landing;
