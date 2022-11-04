import {Component} from 'react'
import './index.css'

class Results extends Component {
  componentDidMount() {
    const {
      activeObj,
      oppObj,
      actObjIndex,
      oppIndex,
      onclickChangeBtn,
      autoIncre,
    } = this.props
    const res = () => {
      console.log(activeObj.id)
      console.log(oppObj.id)
      if (activeObj.id === 'ROCK' && oppObj.id === 'ROCK') {
        return 'DRAW'
      }
      if (activeObj.id === 'ROCK' && oppObj.id === 'SCISSORS') {
        return 'WIN'
      }
      if (activeObj.id === 'ROCK' && oppObj.id === 'PAPER') {
        return 'LOSE'
      }
      if (activeObj.id === 'SCISSORS' && oppObj.id === 'SCISSORS') {
        return 'DRAW'
      }
      if (activeObj.id === 'SCISSORS' && oppObj.id === 'PAPER') {
        return 'WIN'
      }
      if (activeObj.id === 'SCISSORS' && oppObj.id === 'ROCK') {
        return 'LOSE'
      }
      if (activeObj.id === 'PAPER' && oppObj.id === 'PAPER') {
        return 'DRAW'
      }
      if (activeObj.id === 'PAPER' && oppObj.id === 'ROCK') {
        return 'WIN'
      }
      if (activeObj.id === 'PAPER' && oppObj.id === 'SCISSOR') {
        return 'LOSE'
      }
      return null
    }
    const r = res()

    const score = () => {
      switch (r) {
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
    const sc = score()
    autoIncre(sc)
  }

  render() {
    const {
      activeObj,
      oppObj,
      actObjIndex,
      oppIndex,
      onclickChangeBtn,
      autoIncre,
    } = this.props
    const res = () => {
      if (activeObj.id === 'ROCK' && oppObj.id === 'ROCK') {
        return 'DRAW'
      }
      if (activeObj.id === 'ROCK' && oppObj.id === 'SCISSORS') {
        return 'WIN'
      }
      if (activeObj.id === 'ROCK' && oppObj.id === 'PAPERS') {
        return 'LOSE'
      }
      if (activeObj.id === 'SCISSORS' && oppObj.id === 'SCISSORS') {
        return 'DRAW'
      }
      if (activeObj.id === 'SCISSORS' && oppObj.id === 'PAPERS') {
        return 'WIN'
      }
      if (activeObj.id === 'SCISSORS' && oppObj.id === 'ROCK') {
        return 'LOSE'
      }
      if (activeObj.id === 'PAPER' && oppObj.id === 'PAPER') {
        return 'DRAW'
      }
      if (activeObj.id === 'PAPER' && oppObj.id === 'ROCK') {
        return 'WIN'
      }
      if (activeObj.id === 'PAPER' && oppObj.id === 'SCISSOR') {
        return 'LOSE'
      }
      return null
    }

    const ress = res()
    console.log(ress)
    console.log('erss')
    const recont = () => {
      switch (ress) {
        case 'WIN':
          return 'YOU WON'
        case 'LOSE':
          return 'YOU LOSE'
        case 'DRAW':
          return 'IT IS DRAW'

        default:
          return null
      }
    }

    const content = recont()

    return (
      <div className="body-cont-res">
        <div>
          <img
            className="btn-image"
            src={activeObj.imageUrl}
            alt="your choice"
          />

          <img
            className="btn-image"
            src={oppObj.imageUrl}
            alt="opponent choice"
          />
        </div>
        <p>{content}</p>
        <button
          className="play-btn"
          onClick={() => {
            onclickChangeBtn()
          }}
        >
          PLAY AGAIN
        </button>
      </div>
    )
  }
}
export default Results
