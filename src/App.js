import React, { Component } from 'react';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
       <img src={process.env.PUBLIC_URL + '/esimene_pic.png'} className="esimene-pic" alt="logo" />
       <audio src={process.env.PUBLIC_URL + '/wham.mp3'} autoPlay></audio>
          <div className="text-yo">
            <h1>PIPEDRIVE CHRISTMAS PARTY VOL FAMILY REUNION</h1>
            <h2>TOMORROW AT 7PM</h2>
			<div className="kampsun">
				<img className="keerleb-kampsun" src="https://i.axs.com/2015/12/80411346-12-optimized_5660d7a95cc55.png" alt="kampsun"/>
					<h3>DRESSCODE: UGLY SWEATER</h3>
				<img className="keerleb-kampsun" src="https://i.axs.com/2015/12/80411346-12-optimized_5660d7a95cc55.png" alt="kampsun"/>
			</div>

			<div className="kampsun">
				<img className="keerleb-suss" src={process.env.PUBLIC_URL + '/sussid.png'}  alt="suss"/>
					<h4>FOOTWEAR: INDOOR SHOES</h4>
				<img className="keerleb-suss" src={process.env.PUBLIC_URL + '/sussid.png'}  alt="suss"/>
			</div>
            <h5>IF YOU NEED SMTH FROM YOUR ROOM ON SATURDAY THEN GET IT NOW SINCE YOU WON'T BE ABLE TO ACCESS OTHER FLOORS DURING THE PARTY</h5>
            <h6>#WHAMAGEDDON</h6>
          </div>
      </div>
    );
  }
}

export default App;
