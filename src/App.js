import React, { Component } from 'react';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
       <img src={process.env.PUBLIC_URL + '/esimene_pic.png'} className="esimene-pic" alt="logo" />
       <audio src={process.env.PUBLIC_URL + '/wham.mp3'} autoPlay>

       </audio>
          <div className="text-yo">
            <h1>PIPEDRIVE CHRISTMAS PARTY VOL FAMILY REUNION</h1>
            <h2>TOMORROW AT 7PM</h2>
            <h3>DRESSCODE: UGLY SWEATER</h3>
            <h4>FOOTWEAR: INDOOR SHOES</h4>
            <h5>IF YOU NEED SMTH FROM YOUR ROOM ON SATURDAY THEN GET IT NOW SINCE YOU WON'T BE ABLE TO ACCESS OTHER FLOORS DURING THE PARTY</h5>
            <h6>#WHAMAGEDDON</h6>
          </div>
      </div>
    );
  }
}

export default App;
