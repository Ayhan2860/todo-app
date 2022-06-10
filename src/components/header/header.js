import { useEffect, useState } from "react";

function Header({addTodo, todos}) {
    const [todo, setTodo] = useState({todo:'', done:false});
    const onChangeForm = (e) =>{
        setTodo({...todo, [e.target.name]: e.target.value, done:false});
    }
    useEffect(()=>{
         setTodo({todo :''})
    }, [todos])
    const onSubmitChange = (e) =>
    {
        e.preventDefault();
        if(todo.todo === ''){
          return false
        }
        addTodo([...todos, todo]);

        e.preventDefault();
        
    }


    return <>
    <header className="header">
		<h1>todos</h1>
		<form onSubmit={onSubmitChange}>
			<input value={todo.todo}  onChange={onChangeForm} name="todo" className="new-todo" placeholder="What needs to be done?" autoFocus />
		</form>
	</header>
    </>
}

export default Header;