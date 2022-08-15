import React, { useState,useEffect } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';

//Importamos la hoja de estilos task.scss

import '../../styles/task.scss'

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    //Estado del componente 
    const [tasks, setTasks] = useState([defaultTask]);
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
            <div>
                <h1>Your Tasks:</h1>
            </div>
            {/*TODO Aplicar un For/map para renderizar una lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
}



export default TaskListComponent
