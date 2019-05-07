import React from "react";
import moment from "moment";
import TodoList from "./TodoList";

const uuidv4 = require("uuid/v4");

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: "",
      isAssigned: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    var responseDate = moment().format("dddd, MMMM Do YYYY");
    // console.log('render statem ', this.props.id, this.state.items)

    return (
      <div className="square" type="submit">
        <div>
          <p className="date">{responseDate}</p>
        </div>
        <TodoList items={this.state.items} />
        <textarea
          type="text-box"
          className={this.state.isAssigned ? "new-todo" : "new-todo-disable"}
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button
          className={
            this.state.isAssigned ? "submit-button" : "submit-button-disable"
          }
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }

    const newItem = {
      text: this.state.text,
      id: uuidv4()
    };

    this.setState(state => ({
      items: state.items.concat(newItem),
      text: "",
      isAssigned: false
    }));
  }
}

export default Square;
