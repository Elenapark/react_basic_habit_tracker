import React, { PureComponent } from "react";

class Habit extends PureComponent {
  handleIncrement = () => {
    // state object 안의 count를 증가시킨뒤 state를 update해야함
    // just this.state.count ++ 를 해버리면 react가 변경상태를 인지하지 못하므로
    // state를 업데이트 할때는 꼭 react 함수인 setState를 이용해서 아래와 같이 작성해야함
    // this.setState({ count: this.state.count + 1 });
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    // if (this.state.count === 0) {
    //   return;
    // }
    // const count = this.state.count - 1;
    // this.setState({ count: count < 0 ? 0 : count });
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
