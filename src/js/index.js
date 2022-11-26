//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let contador = 0;

setInterval(() => {
contador++
const uno = contador / 1
const dos = contador / 10
const tres = contador / 100
const cuatro = contador / 1000
const cinco = contador / 10000
const seis = contador / 100000

    ReactDOM.render(<Home  uno={uno} dos={dos} tres={tres} cuatro={cuatro} cinco={cinco} seis={seis} />, document.querySelector("#app"));
},1000)




