import './App.css';

const nome = 'Augusto';
const newName = nome.toUpperCase();

function sum(a, b) {
  return a + b
}

const url = 'https://via.placeholder.com/150'


function App() {
  return (
    <div className="App">
      <div>
        <h1 className='titulo'>Meu nome é {newName}</h1>
        <p>Soma: {sum(1, 2)}</p>
        <img src={url} alt="Imagem Random" />
      </div>
    </div>
  );
}

export default App;
