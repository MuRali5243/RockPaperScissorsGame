import './index.css'

const Results = props => {
  const {
    activeObj,
    oppObj,
    actObjIndex,
    oppIndex,
    onclickChangeBtn,
    autoIncre,
  } = props
  const res = () => {
    if (activeObj.id === 'ROCK' && oppObj.id === 'ROCK') {
      autoIncre(0)
      return 'DRAW'
    }
    if (activeObj.id === 'ROCK' && oppObj.id === 'SCISSORS') {
      autoIncre(1)
      return 'WIN'
    }
    if (activeObj.id === 'ROCK' && oppObj.id === 'PAPERS') {
      autoIncre(-1)
      return 'LOSE'
    }
    if (activeObj.id === 'SCISSORS' && oppObj.id === 'SCISSORS') {
      autoIncre(0)
      return 'DRAW'
    }
    if (activeObj.id === 'SCISSORS' && oppObj.id === 'PAPERS') {
      autoIncre(1)
      return 'WIN'
    }
    if (activeObj.id === 'SCISSORS' && oppObj.id === 'ROCK') {
      autoIncre(-1)
      return 'LOSE'
    }
    if (activeObj.id === 'PAPER' && oppObj.id === 'PAPER') {
      autoIncre(0)
      return 'DRAW'
    }
    if (activeObj.id === 'PAPER' && oppObj.id === 'ROCK') {
      autoIncre(1)
      return 'WIN'
    }
    if (activeObj.id === 'PAPER' && oppObj.id === 'SCISSOR') {
      autoIncre(-1)
      return 'LOSE'
    }
    return null
  }

  const score = () => {
    console.log(res())
    switch (res()) {
      case 'WIN':
        return 1
      case 'LOSE':
        return -1
      case 'DRAW':
        return 0

      default:
        return null
    }
  }

  return (
    <div>
      <button className="btn">
        <img className="btn-image" src={activeObj.imageUrl} />
      </button>
      <button className="btn">
        <img className="btn-image" src={oppObj.imageUrl} />
      </button>
      <h1>{res()}</h1>
      <button
        onClick={() => {
          onclickChangeBtn()
        }}
      >
        PLAY BUTTON
      </button>
    </div>
  )
}
export default Results
