import React from 'react'
import Style from '../tasks.module.css'

const Task = (props) => {
    
    return (
        <div className={Style.tasks}>
            <ul className={Style.task}>
                <li><span className={Style.todo}>To do:</span>{props.task}</li>
                <div className="button">
                    <button className={Style.button} onClick={() => props.removeTask(props.index)}>Delete</button>
                    <button className={Style.button} onClick={() => props.completeTask(props.index)}>Complete</button>
                </div>
            </ul>
        </div>
    )
}

export default Task