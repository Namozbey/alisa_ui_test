import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Round = forwardRef(({ size, children }, ref) => (
  <div
    ref={ref}
    className="bg-red-200 text-red-800 border-2 border-solid border-black"
    style={{
      width: size,
      height: size,
      // backgroundColor: `${color}33`,
      // color,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
    }}
  >
    {children}
  </div>
))

Round.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
}

Round.defaultProps = {
  size: 50,
  color: '#764abc',
  className: '',
  children: undefined,
}

export default Round
