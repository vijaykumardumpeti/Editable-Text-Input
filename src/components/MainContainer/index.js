import {Component} from 'react'

import './index.css'

export default class MainContainer extends Component {
  state = {
    isClicked: false,
    inputValue: '',
  }

  onClickButton = () => {
    this.setState(prev => ({
      isClicked: !prev.isClicked,
    }))
  }

  onChangeInput = event => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  render() {
    const {isClicked, inputValue} = this.state
    console.log(isClicked)

    const text = isClicked ? 'Edit' : 'Save'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Editable Text Input</h1>
          <div className="input-and-button-container">
            {isClicked ? (
              <p>{inputValue}</p>
            ) : (
              <input
                value={inputValue}
                onChange={this.onChangeInput}
                type="text"
              />
            )}

            <button
              onClick={this.onClickButton}
              className="button-style"
              type="button"
            >
              {text}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
