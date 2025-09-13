import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({currTask,checked,onHandleDeleteTodo,onHandleCheckedTodo}) => {
    return (
        <li  className='todo-item'>
            <span className={checked?'checkList':'notCheckList'}>
                {currTask}
            </span>
            <button className='check-btn'onClick={()=>onHandleCheckedTodo(currTask)}>
                <MdCheck />
            </button>
            <button className='delete-btn' onClick={() => onHandleDeleteTodo(currTask)}>
                <MdDeleteForever />
            </button>
        </li>
    )
}