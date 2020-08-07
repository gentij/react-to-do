import React from 'react'
import Style from '../tasks.module.css'

const Task = (props) => {
    
    return (
        <div className={Style.tasks}>
            <ul className={Style.task}>
                <li><span className={Style.todo}>Completed:</span>{props.task}</li>
                <div className="button">
                    <button className={Style.button} onClick={() => props.removeCompleted(props.index)}>Delete</button>
                </div>
            </ul>
        </div>
    )
}

export default Task