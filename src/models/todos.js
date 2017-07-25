export default {
  namespace: 'todos',
  state: {
    newTodo: {id: null, title: '', completed: false},
    todos: [
      {id: 1, title: '111', completed: false},
      {id: 2, title: '222', completed: true},
    ],
    maxId: 2
  },
  reducers: {
    changeNewTodoTitle(state, payload){
      let title = payload.title;
      return {
        ...state,
        newTodo: {...state.newTodo, title: title}
      }
    },
    addMaxId(state, payload){
      let maxId = payload.maxId;
      maxId += 1;
      return {
        ...state,
        maxId: maxId
      }
    },
    addTodo(state, payload){
      return {
        ...state,
        todos: [...state.todos, payload.newTodo]
      }
    },

    deleteTodo(state, payload){
      let todos = state.todos.filter((todoItem) => todoItem.id !== payload.todo.id);

      return {
        ...state,
        todos: todos
      }
    },

    toggleTodo(state, payload){
      let todos = state.todos;
      let todo = state.todos.find((todoItem) => todoItem.id === payload.todo.id);
      let index = todos.indexOf(todo);
      todos[index].completed = !todos[index].completed;
      todos = [...todos];

      return {
        ...state,
        todos: todos
      }
    }

  },
  effects: {},
  subscriptions: {},
};
