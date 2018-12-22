import React from "react";
import "./style.css";

// function Title(props) {
//   return <h1 className="title">{props.children}</h1>;
// }

const Title = props => (

  <div className="main-container">
    <nav className="navbar sticky-top navbar-light bg-light justify-content-end">
      <h5 className="text-dark">Current game score: {props.currentScore} | Top score: {props.topScore}</h5>
    </nav>

    <div className="jumbotron text-dark">
      <h1>American Dad Memory Game</h1>
      <p className="lead">Don't click the same picture twice!</p>
    </div>
  </div>
);

export default Title;
