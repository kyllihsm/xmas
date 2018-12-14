import React, { Component } from 'react';
import './App.css';



class App extends Component {

	componentDidMount() {
		setTimeout(() => {
			alert('You are the 999,99th visitor: Congratulations you WON!')
		}, 3000)
		
	}

  render() {
    return (
      <div className="App">
       <img src={process.env.PUBLIC_URL + '/esimene_pic.png'} className="esimene-pic" alt="logo" />
       <audio src="https://images.alarab.com/data/static/MMS_Files/MP3/mp3_files//C/Christmas%20Time/mp3/Alarab.net_George-Micheal.Wham-Last_Christmas.mp3" autoPlay></audio>
	   <iframe loop autoPlay="autoplay" controls style={{display:'none'}}>
			<source src="https://images.alarab.com/data/static/MMS_Files/MP3/mp3_files//C/Christmas%20Time/mp3/Alarab.net_George-Micheal.Wham-Last_Christmas.mp3" type="audio/mpeg"/>
		</iframe>
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
            <h6><a href="https://www.youtube.com/watch?v=E8gmARGvPlI">#WHAMAGEDDON</a></h6>
          </div>
      </div>
    );
  }
}

export default App;
