import React, { Component } from 'react';
import './Task.css';

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.switchInputShow = this.switchInputShow.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.acceptChange = this.acceptChange.bind(this);
    this.state = {
      changedTask: this.props.task.task
    }
  }
  switchInputShow() {
    this.setState(state => ({
        showInput: !state.showInput,
    }));
  }
  inputChange(e) {
    this.setState({ changedTask: e.target.value });
  }
  acceptChange() {
    if(this.state.changedTask) {
      this.props.editTask(this.state.changedTask);
      this.switchInputShow();
    }
  }


  render() {
    return (
      <li className={(this.props.task.state ? 'task-done': '') + " task--container"}>
        <div className="to-do--input-group" style={{ display: (this.state.showInput ? 'block' : 'none') }}>
          <input onChange={this.inputChange}  value={this.state.changedTask} />
          <button className="task-btn changeBtn edit" onClick={this.acceptChange}>Edit task</button>
        </div>
        <span style={{ display: (this.state.showInput ? 'none' : 'block') }}>{this.props.task.task}</span>
          <div style={{ display: (this.state.showInput ? 'none' : 'block') }}>
             <button className='task-btn' onClick={this.props.done}>
               <i className={(this.props.task.state ? 'fa fa-check-circle-o': 'fa fa-circle-o')} aria-hidden='true'></i>
             </button>
             <button className='task-btn edit' onClick={this.switchInputShow}>
               <i className='fa fa-pencil' aria-hidden='true'></i>
             </button>
             <button className='task-btn delete' onClick={this.props.delete} >
               <i className='fa fa-times' aria-hidden='true'></i>
             </button>
          </div>

      </li>
    );
  }
}