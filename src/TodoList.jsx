import { TodoItem } from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodo}){

    return (
        <ul className="list">
            {todos.length === 0 && "No todos" /*js shortcut consept */}
            {todos.map(todo => {
            return (
                // <TodoItem 
                // id={todo.id} c
                // ompleted={todo.completed} 
                // title={todo.title} 
                // key={todo.id}
                // />
                <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
            )
        })}
      </ul>
    )
}