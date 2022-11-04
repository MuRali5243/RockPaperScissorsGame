import './index.css'

const ll = ['rockButton', 'paperButton', 'scissorsButton']

const Button = props => {
  const {data, clicked} = props
  const f = data.id.slice(0, 1).toLowerCase()
  const res = () => {
    if (f === 'r') {
      return 'rockButton'
    }
    if (f === 'p') {
      return 'paperButton'
    }
    if (f === 's') {
      return 'scissorsButton'
    }
    return null
  }

  const testid = res()
  console.log(testid)

  return (
    <button
      data-testid={testid}
      className="btn"
      onClick={() => {
        clicked(data)
      }}
    >
      <img className="btn-image" src={data.imageUrl} alt={data.id} />
    </button>
  )
}

export default Button
