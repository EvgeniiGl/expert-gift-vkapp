import React, {useState} from 'react';
import {useStore} from '../context/store';
import {observer} from 'mobx-react-lite';

const TodoExample = observer((props) => {
    const store = useStore();
    const [text, setText] = useState('');

    function handleInputChange(e) {
        setText(e.target.value);
    }

    function handleSubmit() {
        if (text) {
            setText('');
            store.todoStore.addTodo(text);
        }
    }

    function handle() {

        store.todoStore.setTest();

    }

    return (
        <div className="example">
            <h1>React Hooks Todo Example</h1>
            <div>
                <input
                    type="text"
                    onChange={handleInputChange}
                    value={text}
                    placeholder="todo"
                />
                <button type="submit" onClick={handleSubmit}>
                    add
                </button>
            </div>
            <div>
                {store.todoStore.todos.map((todo, idx) => (
                    <li key={idx}>{todo.title}</li>
                ))}
            </div>
            <h1>---------</h1>
            <div>
                <button type="submit" onClick={handle}>
                    add
                </button>
            </div>
            <div>
                {store.todoStore.test}
            </div>
            <h1>---------</h1>
        </div>
    );
});

export default TodoExample;
