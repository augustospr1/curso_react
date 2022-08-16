function SeuNome({setNome}) {
  return (
    <div>
      <p>Digite o seu nome:</p>
      <input type="text" placeholder="Qual é o seu nome?" onChange={(evento) => setNome(evento.target.value)}/>
    </div>
  )
}

export default SeuNome