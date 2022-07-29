import {useState} from 'react'

function Condicional() {

  const [email, setEmail] = useState()
  const [userEmail, setUserEmail] = useState()

  function enviarEmail(e) {
    e.preventDefault()
    setUserEmail(email)
    alert(userEmail)
  }

  function limparEmail(e) {
    setUserEmail('')
  }

  const atualizaEmail = (e) => {
    setEmail (e.target.value)
    console.log({
      evento: e,
      atual: e.target,
      valor: e.target.value,
      tipo: e.target.type,
      nome: e.target.name,
    })
  }
  return (
    <div>
      <h2>Cadastre o seu e-mail</h2>
      <form onSubmit={enviarEmail}>
        <input type="email" name="nome" placeholder="Digite o seu e-mail..." onChange={atualizaEmail}/>
        <button type='submit'>Enviar email</button>
        {userEmail && (
          <div>
            <p>O e-mail do usuário é: {userEmail}</p>
            <button onClick={limparEmail}>Limpar Email</button>
          </div>
        )}
      </form>
    </div>
  )
}

export default Condicional