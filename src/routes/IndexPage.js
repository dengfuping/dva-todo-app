import React from 'react';
import { connect } from 'dva';
import Todos from '../components/Todos/Todos';
import TodoForm from '../components/TodoForm/TodoForm';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.todoApp}>
      <h1>Todo App</h1>
      <Todos />
      <TodoForm />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
