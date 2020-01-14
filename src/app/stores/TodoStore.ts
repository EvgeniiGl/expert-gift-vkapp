import {types} from 'mobx-state-tree';

const Todo = types.model({
    title: types.string
});

const TodoStore = types
    .model('TodoStore', {
        todos: types.array(Todo)
    })
    .actions(self => ({
        addTodo(title) {
            self.todos.push({title});
        }
    }));


export default TodoStore;
