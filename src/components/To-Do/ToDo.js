import React, { Component } from 'react';
import './ToDo.css';
import Task from "../Task/Task";

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.taskFinished = this.taskFinished.bind(this);
    this.editTask = this.editTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.state = {
      newTask: '',
      tasksList: [{task: "Рассказать доклад", state: 1}, {task: "Ответить на вопросы"}, {task: "Получить фидбэк"}]
    }
  }
  addTask() {
    if (this.state.newTask) {
      this.state.tasksList.push({
        task: this.state.newTask,
        state: false
      });
      this.setState(state => ({
        tasksList: state.tasksList,
        newTask: ''
      }));
    }
  }
  handleChange(e) {
    this.setState({ newTask: e.target.value });
  }

  taskFinished(id) {
    this.setState({
      tasksList: this.state.tasksList.map((element, index) => {
        if (index === id) {
          element.state = !element.state;
        }
        return element;
      })
    });
  }
  editTask(id, newTask) {
    this.setState({
      tasksList: this.state.tasksList.map((element, index) => {
        if (index === id) {
          element.task = newTask;
        }
        return element;
      })
    })
  }

  deleteTask(id) {
    this.state.tasksList.splice(id, 1);
    this.setState(state => ({
      tasksList: state.tasksList,
      newTask: ''
    }));
  }
  render() {
    return (
      <div className="to-do--container">
        <h3>To-Do List</h3>
        <ul className="to-do--tasksBlock">
          {this.state.tasksList.map((item, index) => (<Task task={item}
              delete={() => this.deleteTask(index)}
              editTask={(task) => this.editTask(index, task)}
              done={() => this.taskFinished(index)}
              key={index + item.task}>
            </Task>)
          )}
        </ul>
        <div className="to-do--input-group">
          <input onChange={this.handleChange} value={this.state.newTask} />
          <button className="button" onClick={this.addTask}>New task</button>
        </div>
      </div>
    );
  }
}