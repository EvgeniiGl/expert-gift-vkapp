import {types} from 'mobx-state-tree';

const Todo = types.model({
    title: types.string
});

const TodoStore = types
    .model('TodoStore', {
        todos: types.array(Todo),
        test: types.number,
    })
    .actions(self => ({
        addTodo(title) {
            self.todos.push({title});
            self.test += 1;
        },
        setTest() {
            self.test += 1;
        }
    }));


export default TodoStore;
