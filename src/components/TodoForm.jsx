import { useState } from "react";

export const TodoForm=({onAddTodo})=>{

      const [inputValue,setInpulValue]=useState({});

        const handleInputChange=(value)=>{
        setInpulValue({id:value, content:value, checked:false});
        }

        const handleFormSubmit=(event)=>{
            event.preventDefault();
            onAddTodo(inputValue);
            setInpulValue({id:"", content:"", checked:false});
            
        }
        
    return(
        <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className="todo-input" autoComplete="off" value={inputValue.content} onChange={(e)=>handleInputChange(e.target.value)} />
                    </div>
                    <div>
                        <button className='todo-btn'>Add Task</button>
                    </div>
                </form>
            </section>
    )
}