import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withTheme } from '../theme'
import { filterProps, styleProps } from '../utils'
import { getTailwindClassNames, tailwindProps, propTypes } from '../tailwind'

const Base = forwardRef(
  (
    {
      theme,
      is,
      children,
      className,
      bgImage,
      focusable,
      innerRef,
      style,
      ...rest
    },
    ref,
  ) => {
    const Component = is

    return (
      <Component
        {...filterProps(rest, tailwindProps)}
        className={classnames(
          getTailwindClassNames(
            {
              ...rest,
              'outline-focus': 'none',
              'shadow-focus': 'none',
            },
            { prefix: theme.prefix },
          ),
          className,
        )}
        style={styleProps(style, bgImage)}
        ref={innerRef || ref}
      >
        {children}
      </Component>
    )
  },
)

Base.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  ...propTypes,
}

Base.defaultProps = {
  is: 'div',
  children: undefined,
  className: undefined,
  innerRef: undefined,
}

export { Base as component }
export default withTheme(Base)
