import React, { useState,useEffect } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';

//Importamos la hoja de estilos task.scss

import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Description1', true , LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description2', false , LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Description3', true , LEVELS.BLOCKING);



    //Estado del componente 
    const [tasks, setTasks] = useState([defaultTask1,defaultTask2,defaultTask3]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente 
    useEffect(() => {
        console.log('Modificacion de Tareas')
        setLoading(false);
        return () => {
        console.log('componente Tasklist va a desaparecer')
        };
    }, [tasks])


    const changeState = (id) =>{
        console.log("TODO: Cambiar estado de una tarea ")
    }

    return (
        
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                        Your Tasks:
                        </h5>
                    </div>
                    {/*Card Body(Content)*/}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style = { {position:'relative', height:'400px'} }>
                        <table>
                        <thead>
                            <tr>
                                <th scope='col'>Title</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Priority</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/*ToDo: Iterar sobre una lista de tareas*/}

                        {tasks.map((task,index) => {
                            return(
                                <TaskComponent key={index} task={task}></TaskComponent>
                            )
                        })}
                            
                        </tbody>

                        </table>
                    </div>

                </div>
                    <TaskForm></TaskForm>
            </div>
            {/*TODO Aplicar un For/map para renderizar una lista */}
           {/*<TaskComponent task={defaultTask}></TaskComponent>*/}
        </div>
    );
}



export default TaskListComponent
