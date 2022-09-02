import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import Greetingf from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/OptionalRender';
import LoginFormik from './components/pure/forms/loginFormik';



function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*<img src={logo} className="App-logo" alt="logo" />*/}
      {/* <Greetingf name="Mario"> </Greetingf>*/}
      {/*Componente de listado de tareas*/}
      {/*<TaskListComponent></TaskListComponent>*/}
      {/*Ejemplos de Hooks*/}
      {/*<Ejemplo1></Ejemplo1>*/}
      {/*<Ejemplo2></Ejemplo2>*/}
      {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
      {/*<Ejemplo4 name = "Mario"></Ejemplo4>
      <h2>
        Contenido Props.children
      </h2>*/}
      {/*<GreetingStyled name = "Mario"></GreetingStyled>*/}
      {/*</header>*/}
      {/*Gestion de eventos*/}
      {/*<Father></Father>*/}
      {/*Ejemplos de renderizado adicional*/}

      {/*<TaskListComponent></TaskListComponent>*/}

      {/*<OptionalRender></OptionalRender>*/}

      {/*Ejemplos de uso de Formik y YUP*/}

      <LoginFormik></LoginFormik>

    </div>
  );
}

export default App;
