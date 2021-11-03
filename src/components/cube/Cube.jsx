import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Cube = forwardRef(({ size, color, children }, ref) => (
  <div
    ref={ref}
    style={{
      width: size,
      height: size,
      backgroundColor: `${color}33`,
      color,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    }}
  >
    {children}
  </div>
))

Cube.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node,
}

Cube.defaultProps = {
  size: 50,
  color: '#764abc',
  children: undefined,
}

export default Cube
