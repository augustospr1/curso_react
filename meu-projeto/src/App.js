import './App.css';
import HelloWorld from './components/HelloWorld.js';
import SayMyName from './components/SayMyName.js';
import Pessoa from './components/Pessoa';

const url = 'https://via.placeholder.com/150'

function App() {

  const nome = 'Maria'

  return (
    <div className="App">
      <div>
        <HelloWorld/>
        <SayMyName nome="Matheus" />
        <SayMyName nome="João" />
        <SayMyName nome={nome} />
        <Pessoa nome="Augusto" idade="27" profissao="Programador" foto="https://via.placeholder.com/150"/>
      </div>
    </div>
  );
}

export default App;
