import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import Greetingf from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {/* <Greetingf name="Mario"> </Greetingf>*/}
      {/*Componente de listado de tareas*/}
      {/*<TaskListComponent></TaskListComponent>*/}
      {/*Ejemplos de Hooks*/}
      {/*<Ejemplo1></Ejemplo1>*/}
      {/*<Ejemplo2></Ejemplo2>*/}
      <MiComponenteConContexto></MiComponenteConContexto>
      </header>
    </div>
  );
}

export default App;
