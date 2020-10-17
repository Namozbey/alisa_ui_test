import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import Base from './Base'

const focusableElements = ['input', 'select', 'textarea', 'button', 'a']

const Touchable = forwardRef(
  ({ is, children, tabIndex, disabled, onTouch, ...rest }, ref) => {
    const isSemantic = focusableElements.includes(is)
    const handleKeyPress = e => {
      if (
        onTouch &&
        ((e.key &&
          (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar')) ||
          (e.keyCode && (e.keyCode === 13 || e.keyCode === 32)))
      ) {
        e.preventDefault()
        onTouch(e)
      }
    }

    return (
      <Base
        is={is}
        select="none"
        cursor="pointer"
        pointerEvents={disabled ? 'none' : undefined}
        focusable
        role={!isSemantic ? 'button' : undefined}
        tabIndex={tabIndex || (!isSemantic && !disabled ? 0 : undefined)}
        opacity={disabled ? 50 : undefined}
        disabled={disabled}
        aria-disabled={disabled || undefined}
        onClick={onTouch}
        onKeyPress={!isSemantic && !disabled ? handleKeyPress : undefined}
        ref={ref}
        {...rest}
      >
        {children}
      </Base>
    )
  },
)

Touchable.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  onTouch: PropTypes.func,
}

Touchable.defaultProps = {
  is: 'button',
  children: undefined,
  disabled: false,
  tabIndex: undefined,
  onTouch: undefined,
}

export default Touchable
