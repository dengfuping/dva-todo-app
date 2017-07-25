import React from 'react';
import {connect} from 'dva';
import {findDOMNode} from 'react-dom';
import styles from './TodoForm.css';

function TodoForm({dispatch, newTodo, todos, maxId}) {
  let title = '';

  function handleInputChange(event) {
    title = event.target.value;
  }

  function addTodo() {
    dispatch({
      type: 'todos/addMaxId',
      maxId: maxId
    });
    let id = maxId + 1;
    dispatch({
      type: 'todos/addTodo',
      newTodo: {id: id, title: title, completed: false}
    });
  }

  return (
    <form className={styles.todoForm}>
      <input type="text" onChange={handleInputChange.bind(this)}/>
      <button onClick={addTodo.bind(this)}>Add</button>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    newTodo: state.todos.newTodo,
    todos: state.todos.todos,
    maxId: state.todos.maxId,
  };
}

export default connect(mapStateToProps)(TodoForm);
