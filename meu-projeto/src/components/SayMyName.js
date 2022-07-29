// Props - usado para passar vários valores para esses caras lá no App.js

function SayMyName(props) {
  return (
    <div>
      <p>Fala aí {props.nome}, suave?</p>
    </div>
  )
}

export default SayMyName