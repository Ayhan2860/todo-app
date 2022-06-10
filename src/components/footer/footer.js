import { useState } from "react";

function Footer({todos, setTodos, setHide}) {
    const [selected, setSelected] = useState('selected', '', '')
    const completed = todos.filter(todo => todo.done === true)
    const unCompleted = todos.filter(todo => todo.done === false)


    const clearCompleted = (e)=>{
        e.preventDefault();
        setTodos(unCompleted);
    }

    const filterHandler = (e) =>
    {
        switch (e.target.name) {
            case 'completed':
                setSelected(['', '', '']);
                setHide('Completed')
            break;
            case 'active':
                setSelected(['', 'selected', '']);
                setHide('Active')
            break;
            case 'all':
                setSelected(['selected', '', '']);
                setHide('All')
            break;
            default:
            break;
        }
    }


    return <>
    <footer className="footer">
		<span className="todo-count">
			<strong>{unCompleted.length}</strong>
			items left
		</span>

		<ul className="filters">
			<li>
				<a href="#/" onClick={filterHandler}  name="all" className={selected[0]} >All</a>
			</li>
			<li>
				<a name="active" onClick={filterHandler} className={selected[1]}  href="#/">Active</a>
			</li>
			<li>
				<a name="completed" onClick={filterHandler}  className={selected[2]} href="#/">Completed</a>
			</li>
		</ul>

		<button onClick={clearCompleted} className={completed === 0 ? "hidden": "clear-completed"}>
			Clear completed
		</button>
	</footer>
    <footer className="info">
	<p>Click to edit a todo</p>
	<p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
	<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
</footer>
    </>
}

export default Footer;