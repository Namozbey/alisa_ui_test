import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { Text } from '../primitives'

const Label = forwardRef(
  (
    {
      theme,
      is,
      id,
      field: { labelId, inputId, disabled },
      children,
      htmlFor,
      optionList,
      ...rest
    },
    ref,
  ) => (
    <Text
      is={is}
      id={labelId || id}
      inlineBlock
      htmlFor={!optionList ? inputId || htmlFor : undefined}
      m={{ b: theme.spacing.sm }}
      ref={ref}
      opacity={disabled ? 50 : undefined}
      weight="bold"
      {...rest}
    >
      {children}
    </Text>
  ),
)

Label.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  id: PropTypes.string,
  field: PropTypes.shape({
    inputId: PropTypes.string,
    disabled: PropTypes.bool,
  }),
  children: PropTypes.node,
  htmlFor: PropTypes.string,
  optionList: PropTypes.bool,
}

Label.defaultProps = {
  is: 'label',
  id: undefined,
  field: {
    disabled: false,
  },
  children: undefined,
  htmlFor: undefined,
  optionList: false,
}

export { Label as component }
export default withTheme(Label)
