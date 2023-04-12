import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer mensaje={'Acá van a ir los items'}/>
    </>
  );
}

export default App;
