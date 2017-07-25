import React from 'react';
import {connect} from 'dva';
import styles from './Todo.css';

function Todo({params, todos}) {
  let currentTodo = todos.filter(todo => todo.id === parseInt(params.id))[0];
  return (
    <div className={styles.todo}>
      <h2>id: {currentTodo.id}</h2>
      <h2>title: {currentTodo.title}</h2>
      <h2>completed: {currentTodo.completed ? 'Yes' : 'No'}</h2>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todos.todos,
  };
}

export default connect(mapStateToProps)(Todo);
