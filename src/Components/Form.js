import React, {useState} from 'react'
import Task from './Tasks'
import Style from '../form.module.css'
import Completed from './Completed'

const Form = () => {
  const [tasks, setTasks] = useState([])
  const [completed, setCompleted] = useState([])
  const [input, setInput] = useState('');
  const [alert, setAlert] = useState('');
  const [successAlert, setSuccessAlert] = useState('')

  const updateInput = (e) => {
    setInput(e.target.value)
  }

  const addTask = (e) => {
    e.preventDefault();
    if(input) {
      setTasks(tasks => [...tasks, input])
    } else {
      setAlert('The input can not be empty')
      setTimeout(() => {
        setAlert('')
      }, 1000);
    }
    setInput('')
  }

  const remove = (arr, removeId) => {
    setSuccessAlert(`Task: "${arr[removeId]}" was removed successfully`)
    setTimeout(() => {
      setSuccessAlert('')
    }, 1000);
    arr.splice(removeId, 1)
  }

  const removeTask = (removeId) => {
    remove(tasks, removeId)
  }

  const removeCompleted = (removeId) => {
    remove(completed, removeId)
  }

  const completeTask = (toBeCompleted) => {
    setSuccessAlert(`Task: "${tasks[toBeCompleted]}" was completed successfully`)
    setTimeout(() => {
      setSuccessAlert('')
    }, 1000);
    setCompleted(completed => [...completed, tasks[toBeCompleted]])
    setTimeout(() => {
      tasks.splice(toBeCompleted, 1)
    }, 100);
  }

  return(
    <div className="Form">

      <form className={Style.form}>
        <input className={Style.input} placeholder="New task..." type="text" value={input} onChange={updateInput}></input>
        <button onClick={addTask} className={Style.button} type="submit">Add Task</button>
      </form>
      <div className={Style.tasks}>
        <p className="danger-alert">{alert}</p>
        <p className="success-alert">{successAlert}</p>
        <div className={Style.todos}>
          <div className={Style.heading}>
            <h1>To do: </h1>
          </div>
            {tasks.map((element, index) => (
                <Task
                  key = {index}
                  index = {index}
                  task = {element}
                  removeTask = {removeTask}
                  completeTask = {completeTask}
                />
            ))}
        </div>
      </div>
      <div className={Style.completed}>
        <div className={Style.heading}>
          <h1>Completed: </h1>
        </div>
        {completed.map((element, index) => (
                      <Completed
                        key = {index}
                        index = {index}
                        task = {element}
                        removeCompleted = {removeCompleted}
                      />
                  ))}
      </div>
    </div>
  )
}

export default Form