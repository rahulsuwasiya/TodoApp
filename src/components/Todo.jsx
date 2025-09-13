import { useEffect, useState } from 'react'
import './Todo.css'
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoDate } from './TodoDate';
import { setLocalStorageTodoData,getLocalStorageTodoData } from './TodoLocalStorage';


export const Todo=()=>{
  
    const [task,setTask]=useState(()=>getLocalStorageTodoData());

    const handleFormSubmit=(inputValue)=>
    {
        const {id, content, checked}=inputValue;

        if(!content) return;
        //if(task.includes(inputValue)) return;
        const ifToddContentMatched=task.find((currTask)=>{
            currTask.content===content
        });

        if(ifToddContentMatched) return;

        setTask((prev)=>[...prev,{id,content,checked}])
    }

    //Add Data to Local Storage
    setLocalStorageTodoData(task)
    
   const handleDeleteTodo=(value)=>{
       const updatedTask=task.filter((currTask)=>currTask.content!==value)
       setTask(updatedTask);
   }

   const handleClearTodoData=()=>{
        setTask([]);
   }

   const handleCheckedTodo=(content)=>{
        const updatedTask=task.map((currTask)=>{
            if(currTask.content===content)
            {
                return {...currTask, checked:!currTask.checked}
            }else{
                return currTask;
            }
        })
        setTask(updatedTask)
   }
   
    return(
        <section className='todo-container'> 
            <header>
                <h1>ToDo List</h1>
                <TodoDate/>
            </header>
            <TodoForm onAddTodo={handleFormSubmit}/>
            <section className='myUnOrdList'>
                <ul>
                    {
                        task.map((currTask)=>{
                            return <TodoList key={currTask.id} currTask={currTask.content} 
                            checked={currTask.checked}
                            onHandleDeleteTodo={handleDeleteTodo}
                            onHandleCheckedTodo={handleCheckedTodo}/>
                         
                        })
                    }
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={handleClearTodoData}>Clear All</button>
            </section>
        </section>
    )
}