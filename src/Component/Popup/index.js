import PopUp from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import './index.css'

const rulesImg =
  'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png'

const Popup = () => (
  <div className="popup-cont">
    <PopUp
      modal
      trigger={<button className="pop-button"> RULES</button>}
      position="bottom center"
    >
      {close => (
        <div className="pop-up-show-cont">
          <button
            className="close-btn"
            onClick={() => {
              close()
            }}
          >
            <RiCloseLine size={75} />
          </button>
          <img className="rules-image" src={rulesImg} alt="rules" />
        </div>
      )}
    </PopUp>
  </div>
)

export default Popup
