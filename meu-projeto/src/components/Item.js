import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}) {
  return (
    <>
      <li>{marca} - {ano_lancamento}</li>
    </>
  )
}

//Esse cara passa para o props qual tipo ele vai ser, ex: string, number, etc.
Item.propTypes = {
  marca: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number.isRequired,
}


//Esse cara preenche o campo sozinho se caso ele for Required e não for preenchido pelo usuário
Item.defaultProps = {
  marca: 'Faltou a marca',
  ano_lancamento: 0,
}

export default Item