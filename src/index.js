import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Square from "./components/Square";

class Board extends React.Component {
  renderSquare(i) {
    return <Square id={i} />;
  }

  render() {
    return (
      <div>
        <div className="top">To-Do-List</div>
        <div className="Row-list">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="Row-list">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Board />, document.getElementById("root"));
