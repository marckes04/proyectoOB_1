import React,{useRef} from 'react';
import PropTypes from 'prop-types';
import {LEVELS} from '../../../models/levels.enum'
import { Task } from '../../../models/task.class';

const  TaskForm = ({add}) => {

  const nameRef = useRef('');
  const descriptionRef = useRef('');
  const LevelRef = useRef(LEVELS.NORMAL);
  
  function addTask(e){
      e.preventDefault();
      const NewTask = new Task(
        nameRef.current.value,
        descriptionRef.current.value,
        false,
        LevelRef.current.value
      )
      add(NewTask);
  }

  return (
  <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
    <div className='form-outline flex-fill'>
      <input ref={nameRef} id = 'inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task Name'/>
      <input ref={descriptionRef} id = 'inputDescription' type='text' className='form-control form-control-lg' required placeholder='Task Description'/>
      <label htmlFor='selectLevel' className='sr-only'>Priority</label>
      <select ref={LevelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
        <option value={LEVELS.NORMAL}> 
          Normal
        </option>

        <option value={LEVELS.URGENT}> 
          Urgent
        </option>

        <option value={LEVELS.BLOCKING}> 
          Blocking
        </option>
        
      </select>
    </div>
    <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
  </form>
  )
}

TaskForm.prototype = {
  add: PropTypes.func.isRequired

}

export default TaskForm;