import logo from './logo.png';
import tropy from './asserts/1.png';
import main from './asserts/2.png';
import pumpset from './asserts/3.png';
import { IoCallOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='maindiv'>
        <div className="container bg-opacity-5">
          <img src={tropy} className="trophy" alt="logo" />
          <div className="content">
              <p className="p1">
                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
              </p>
              <ul>
                <li>
                C.R.I.'s energy efficient products are well recognized by various Government 
                Institutions, as trustworthy products for various projects across the globe to 
                save energy.
                </li>
                <li>
                C.R.I. is the highest contributor in the country for the projects of EESL 
                (Energy Efficiency Services Limited) to replace the old inefficient pumps with 
                5 Star rated energy efficient smart pumps with IoT enabled control panel. 
                </li>
              </ul>

              <img src={main} className="main" alt="logo" />

              <div>
                Government of India has awarded the "National Energy Conservation Award 2018". 
                Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from
                Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable 
                Minister of State.
              </div>
          </div>
      </div>
      <div>
      INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE 
      SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
      </div>
      <div className='pumpdiv'>
        <img src={pumpset} className="pumpset" alt="logo" />
        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar 
        Systems - Motors </p>
      </div>
      
      
        <hr></hr>
        <div className='down'>
          <p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
          <p>CHEMICALS & PROCESS <span className="line">|</span> POWER 
          <span className="line">|</span> WATER & WASTE 
          WATER <span className="line">|</span>  OILS & GAS <span className="line">|</span>  
          PHARMA <span className="line">|</span>  SUGARS & DISTILLERIES <span className="line">|</span> 
          PAPER & PULP <span className="line">|</span>  MARINE & DEFENCE <span className="line">|</span>  
          METAL & MINING <span className="line">|</span>  FOOD & BEVERAGE <span className="line">|</span>  
          PETROCHEMICAL & REFINERIES <span className="line">|</span>  SOLAR <span className="line">|</span> 
          BUILDING <span className="line">|</span>  HVAC <span className="line">|</span> 
          FIRE FIGHTING <span className="line">|</span> AGRICULTURE & RESIDENTIAL</p>
        </div>
        <div className="footer">
          <div className='call'>
            <IoCallOutline />
            Toll free 1800 200 1234
          </div>
          <div className='facebook'>
            <FaFacebook />
            www.facebook.com/cripumps
          </div>
          <div className='world'>
            <TbWorld />
            www.crigroups.com
          </div>
      
      
      
      </div>
      
      </div>
      
    </div>
  );
}

export default App;
