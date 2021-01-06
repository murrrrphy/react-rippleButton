import React, {useState, useRef} from 'react'
import './button.css'

function Button(props) {
  const btn=useRef(null)
  const [state, setState] = useState({active: false, deltaX: 0, deltaY: 0})
  const addCircle = (event) => {
    const deltaX = event.clientX - btn.current.getBoundingClientRect().x - 5;
    const deltaY = event.clientY - btn.current.getBoundingClientRect().y - 5;
    setState({
      active: true,
      deltaX: deltaX,
      deltaY: deltaY
    })
  }
  const removeCircle = () => {
    setState({
      ...state,
      active: false
    })
  }
  return (
    <button ref={btn} className="button" onClick={addCircle}>
      <span className="value">
        {props.value}
      </span>
      {state.active === true ?
        <span onAnimationEnd={removeCircle} className="circle" style={{left: state.deltaX, top: state.deltaY}}/>
        : ''}
    </button>
  )
}

export {Button}