
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';



//create your first component

const Home = ({ uno, dos,tres,cuatro,cinco,seis}) =>{
return (
<div className="container text-center">
<div className="row p-5 bg-dark text-white">
  <div className="reloj col-1 col-sm-1"><FontAwesomeIcon icon={faClock} /></div>
  <div className="seis display-1 col-2 col-sm-1">{Math.floor(seis % 10)}</div>
  <div className="cinco display-1 col-2 col-sm-1">{Math.floor(cinco % 10)}</div>
  <div className="cuatro display-1 col-2 col-sm-1">{Math.floor(cuatro % 10)}</div>
  <div className="tres display-1 col-2 col-sm-1">{Math.floor(tres % 10)}</div>
  <div className="dos display-1 col-2 col-sm-1">{Math.floor(dos % 10)}</div>
  <div className="uno display-1  col-2 col-sm-1">{uno % 10}  </div>


  </div>
	  </div>	

);

};
		


export default Home;



 
	 