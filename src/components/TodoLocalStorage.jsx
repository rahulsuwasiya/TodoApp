
export const todoKey="reactTodo"

export const getLocalStorageTodoData=()=>{
    const rowTodos=localStorage.getItem(todoKey)
    console.log(rowTodos)
    if(!rowTodos) return [];
    
    return JSON.parse(rowTodos)
   
}

export const setLocalStorageTodoData=(task)=>{
    console.log(task)
    return localStorage.setItem(todoKey,JSON.stringify(task))
}