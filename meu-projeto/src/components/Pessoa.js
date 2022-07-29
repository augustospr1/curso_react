// Props - usado para passar vários valores para esses caras lá no App.js

function Pessoa({nome, idade, profissao, foto}) {
  return(
    <div>
      <img src={foto} alt={nome} />
      <h1>Nome: {nome}</h1>
      <p>Idade: {idade}</p>
      <p>Profissao: {profissao}</p>
    </div>
  )
}

export default Pessoa