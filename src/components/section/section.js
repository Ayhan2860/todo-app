import { useEffect } from "react"




function Section({todos, setTodos, hide}) {
    
    const isComploted = (e)=> 
    {
       setTodos( todos.map((todo, index)=>{
        return parseInt(index + 1) === parseInt(e.target.id) ? {...todo, done:!todo.done}: todo;
    }))
    }

    const isActive = (e) =>
    {
         if(e.done && hide === "All")
         {
            return 'completed'
         }
         else if(e.done && hide === "Active")
         {
            return 'completed hidden'
         }
         if(!e.done && hide === "Completed")
         {
            return 'hidden'
         }
    }
   

    useEffect(()=>{
   

    },[todos])
    return <>
    <section className="main">
		<input className="toggle-all" type="checkbox" />
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>

		<ul className="todo-list">
			{todos.map((todo, index)=>{
                 
                return <li key={index} className={`${isActive(todo)}`} >
				<div className="view">
					<input  id={(index +1)}  onChange={isComploted} className="toggle" type="checkbox" />
					<label> {todo.todo} </label>
					<button className="destroy"></button>
				</div>
			</li>
                
            })}
		</ul>
	</section>

	
    </>
}

export default Section;