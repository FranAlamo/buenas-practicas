import "./App.css";
import ListaDeTareas from "./Componentes/ListaDeTareas";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="tareas-lista-principal">
        <h1 className="titulo">Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
