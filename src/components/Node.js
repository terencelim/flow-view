import React, { PropTypes } from 'react'
import xCoordinateOfPin from '../geometry/xCoordinateOfPin'
import ignoreEvent from '../util/ignoreEvent'

const highlighted = {
  stroke: 'rgb(0,0,0)',
  strokeWidth: 1
}

const Node = ({
  x, y, width, height,
  fill, text,
  pinSize,
  ins, outs,
  dragged,
  dragItems,
  createLink,
  selectNode,
  selected,
  endDragging
}) => (
  <g
    onClick={ignoreEvent}
    onMouseDown={selectNode}
    onMouseUp={endDragging}
    onMouseLeave={endDragging}
    onMouseMove={dragged ? dragItems : undefined}
    transform={`matrix(1,0,0,1,${x},${y})`}
    style={{
      cursor: (selected ? 'pointer' : 'default')
    }}
  >
    <rect
      width={width}
      height={height}
      fill={fill.box}
      style={selected ? highlighted : undefined}
    ></rect>

    <text
      x={pinSize}
      y={pinSize * 2}
      style={{pointerEvents: 'none'}}
    >
      <tspan>{text}</tspan>
    </text>

    {
      ins.map(
        (pin, i, array) => (
          <rect key={i}
            onMouseDown={ignoreEvent}
            onMouseMove={ignoreEvent}
            onMouseUp={ignoreEvent}
            fill={fill.pin}
            {...pin}
          >
          </rect>
        )
      )
    }

    {
      outs.map(
        (pin, i) => (
          <rect
            key={i}
            x={xCoordinateOfPin(pinSize, width, outs.length, i)}
            y={height - pinSize}
            onMouseDown={ignoreEvent}
            onMouseMove={ignoreEvent}
            onMouseUp={ignoreEvent}
            fill={fill.pin}
            {...pin}
          >
          </rect>
        )
      )
    }
  </g>
)

Node.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  pinSize: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  fill: PropTypes.shape({
    box: PropTypes.string.isRequired,
    pin: PropTypes.string.isRequired
  }),
  ins: PropTypes.array.isRequired,
  dragged: PropTypes.bool.isRequired,
  outs: PropTypes.array.isRequired,
  selectNode: PropTypes.func.isRequired,
  endDragging: PropTypes.func.isRequired,
  dragItems: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  createLink: PropTypes.func.isRequired
}

Node.defaultProps = {
  fill: {
    box: '#cccccc',
    pin: '#333333'
  },
  selected: false
}

export default Node