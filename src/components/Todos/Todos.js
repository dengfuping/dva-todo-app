import React from 'react';
import {connect} from 'dva';
import { Link } from 'dva/router';
import styles from './Todos.css';

function Todos({dispatch, todos}) {
  function deleteTodo(todo) {
    dispatch({
      type: 'todos/deleteTodo',
      todo: todo
    })
  }

  function toggleTodo(todo) {
    dispatch({
      type: 'todos/toggleTodo',
      todo: todo
    })
  }

  return (
    <div className={styles.todos}>
      <ul>
        {
          todos.map(function (todo, index) {
            let url = '/TodoPage/' + todo.id;
            return <li key={index}><Link to={url}>{todo.title}</Link><button onClick={deleteTodo.bind(this, todo)}>Delete</button><button onClick={toggleTodo.bind(this, todo)}>{todo.completed ? 'Undo' : 'Complete'}</button></li>
          })
        }
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todos.todos,
  };
}

export default connect(mapStateToProps)(Todos);
