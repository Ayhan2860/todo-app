import { useEffect, useState } from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import Section from "./section/section";


function Todo() {
     const [todos, setTodos] = useState([
        {todo:"Learn JavaScript", done:false},
        {todo:"Learn React", done:false},
        {todo:"Have a life!", done:false}
    ])
    const [hide, setHide] = useState('All')
    useEffect(()=>{},[todos])
    
    return <>
     <div className="todoapp">
	  <Header addTodo={setTodos} todos={todos} />
    <Section todos={todos} setTodos={setTodos} hide={hide}/>
    <Footer todos={todos} setTodos={setTodos} setHide={setHide} />
</div>
    </>
}

export default Todo;