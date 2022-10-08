import React from 'react';
import './App.css';
import MechanicalService from './components/MechanicalService';

// import SVG images
import mechanicalImg from "./images/Mechanical.svg";

class App extends React.Component {
  constructor(props){
    super(props);
    //initialize state with mechanical services
    this.state = {
      mechanicalServices: [
        {
          title: "Oil & Filter Service",
          position: "01"
        },
        {
          title: "AC gas refill",
          position: "02"
        },
        {
          title: "AC filter replacement",
          position: "03"
        },
        {
          title: "Disc skimming",
          position: "04"
        },
        {
          title: "Wheel Balance & Alignment",
          position: "05"
        },
        {
          title: "Full Inspection",
          position: "06"
        },
      ]
    };
  }

  render(){
    return (
      <div>
        <div className='NavBar'>
          <p style={{ color: "white" }}>Hello</p>
        </div>
        <div className="AppContainer">
          <div className='SideNavBar'>
            <p style={{ color: "white" }}>World</p>
          </div>
          <div className="ContentDiv">
            <p className="Services">Services</p>
            <div className='Mechanical'>
              <div className='MechanicalHeading'>
                <div className='MechanicalImageHolder'>
                  <img className='MechanicalImg' src={mechanicalImg} alt="Mechanical" />  
                </div>
                <p className="MechanicalText">Mechanical</p>
              </div>
              <div className='MechanicalBody'>
                {
                  this.state.mechanicalServices.map((item, index) => (
                    <MechanicalService service={item}
                      key={index}
                    />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
