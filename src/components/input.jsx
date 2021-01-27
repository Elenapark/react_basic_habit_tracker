import React, { PureComponent } from "react";

class Input extends PureComponent {
  // React에서 inputValue를 알아오는 방법
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = "";
  };

  render() {
    return (
      <form className="input" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="input-field"
          placeholder="Habit"
        />
        <button className="input-button">Add</button>
      </form>
    );
  }
}

export default Input;
