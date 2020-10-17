import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { filterProps } from '../utils'

import tailwindProps, { propTypes } from './tailwindProps'
import getTailwindClassNames from './getTailwindClassNames'

const withTailwind = (Component, { ignore = [] } = {}) => {
  const WithTailwind = forwardRef(({ className, ...props }, ref) => (
    <Component
      {...filterProps(
        props,
        tailwindProps.filter(prop => !ignore.includes(prop)),
      )}
      className={classnames([
        getTailwindClassNames(props, { ignore }),
        className,
      ])}
      ref={ref}
    />
  ))

  WithTailwind.displayName = `WithTailwind(${Component.displayName})`

  WithTailwind.propTypes = {
    className: PropTypes.string,
    ...propTypes,
  }

  WithTailwind.defaultProps = {
    className: undefined,
  }

  return WithTailwind
}

export default withTailwind
