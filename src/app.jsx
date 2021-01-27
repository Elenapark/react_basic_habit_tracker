import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import Reset from "./components/reset";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Baking", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    // const count = habit.count++;
    // this.setState({ count: count });

    // **** React에서는 state object를 직접적으로 수정하는 것이 매우 좋지 않다
    // 따라서 위의 코드보다는 아래와 같이 spread operator를 이용하여 새로 array를 복제하여 진행하는 것이 좋음

    // ******** 새로운 오브젝트를 복제하여 그 오브젝트 자체를 수정하는 이유는 그래야 react가 업데이트 사항이 있는 것으로
    // 알고 업데이트를 진행하기 때문.. (오브젝트 자체가 아닌 오브젝트의 데이터만 바뀌는 것을 인지하지 못함 = shallow comparison!)
    /*
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    // this.setState({habits : habits}); key와 value가 동일한 이름인 경우 하나로 축약해서 사용
    this.setState({ habits });
    */

    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });

    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    /*
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
    */

    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });

    this.setState({ habits });
  };

  handleDelete = (habit) => {
    // 누른 habit의 id가 아닌 요소들만 모아서 다시 배열을 만듦
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (habitName) => {
    // 새로 만든 habit을 기존 리스트에 추가하는 코드
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: habitName, count: 0 },
    ];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      /*
      habit.count = 0;
      return habit;
      */
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
        />
        <Reset onReset={this.handleReset} />
      </>
    );
  }
}

export default App;
