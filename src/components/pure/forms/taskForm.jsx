import React,{useRef} from 'react';
import PropTypes from 'prop-types';
import {LEVELS} from '../../../models/levels.enum'
import { Task } from '../../../models/task.class';

const  TaskForm = ({add,length}) => {

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


  const normalStyle = {
    color:'blue',
    fontWeight: 'bold'
  }

  const urgentStyle = {
    color:'yellow',
    fontWeight: 'bold'
  }

  const blockingStyle = {
    color:'tomato',
    fontWeight: 'bold'
  }

  return (
  <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
    <div className='form-outline flex-fill'>
      <input ref={nameRef} id = 'inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task Name'/>
      <input ref={descriptionRef} id = 'inputDescription' type='text' className='form-control form-control-lg' required placeholder='Task Description'/>
      <select style={normalStyle} className='form-control form-control-lg' ref={LevelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
        <option  value={LEVELS.NORMAL}> 
          Normal
        </option>

        <option style={urgentStyle} value={LEVELS.URGENT}> 
          Urgent
        </option>

        <option style={blockingStyle} value={LEVELS.BLOCKING}> 
          Blocking
        </option>
        
      </select>
      <button type='submit' className='btn btn-success btn-lg ms-2'>
      {length > 0 ? 'Add New Task' : 'Create your First Task'}
      </button>
    </div>
    
  </form>
  )
}

TaskForm.prototype = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired

}

export default TaskForm;