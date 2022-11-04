import {Component} from 'react'
import Button from '../Buttons'
import Popup from '../Popup'
import Results from '../ResultsComp'
import './index.css'

class Main extends Component {
  state = {status: true, score: 0, image: '', activeObj: {}, resultt: ''}

  clicked = actObj => {
    const {data} = this.props
    const l = data.length
    const r = Math.floor(Math.random() * l)
    this.setState(pre => ({status: !pre.status, image: r, activeObj: actObj}))
  }

  onclickChangeBtn = () => {
    this.setState(pre => ({status: !pre.status}))
  }

  autoIncre = sc => {
    const {score} = this.state

    this.setState({score: score + sc})
  }

  initialComp = () => {
    const {data} = this.props
    return (
      <div className="body-cont">
        <url className="body-cont-btn12">
          {data.map(each => (
            <Button key={each.id} clicked={this.clicked} data={each} />
          ))}
        </url>
        <div className="popup-cont">
          <Popup />
        </div>
      </div>
    )
  }

  render() {
    const {status, score, image, activeObj} = this.state
    const {data} = this.props
    const oppObj = data[image]
    const actObjIndex = data.indexOf(activeObj)
    const oppIndex = data.indexOf(oppObj)
    console.log(oppIndex)

    return (
      <div className="main-cont">
        <div className="top-cont">
          <div className="top-cont-p">
            <h1>ROCK PAPER SCISSORS</h1>
          </div>
          <div className="top-cont-score">
            <p>Score</p>
            <p className="p-score">{score}</p>
          </div>
        </div>
        {status ? (
          this.initialComp()
        ) : (
          <Results
            onclickActiveImg={this.onclickActiveImg}
            activeObj={activeObj}
            oppObj={oppObj}
            actObjIndex={actObjIndex}
            oppIndex={oppIndex}
            onclickChangeBtn={this.onclickChangeBtn}
            autoIncre={this.autoIncre}
          />
        )}
      </div>
    )
  }
}
export default Main
