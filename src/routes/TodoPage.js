import React from 'react';
import { connect } from 'dva';
import Todo from '../components/Todo/Todo';
import styles from './TodoPage.css';

function TodoPage() {
  return (
    <div className={styles.normal}>
      <Todo />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Todo);
