import React from "react";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAssigned: false
    };
    this.handleSubmitForList = this.handleSubmitForList.bind(this);
  }

  render() {
    return this.props.items.map(item => (
      <div
        className={
          this.state.isAssigned ? "to-do-button" : "to-do-button-inactive"
        }
        key={item.id}
        onClick={this.handleSubmitForList}
      >
        {item.text}
      </div>
    ));
  }

  handleSubmitForList(e) {
    this.setState({ isAssigned: true });
    // console.log(e.key);
  }
}
