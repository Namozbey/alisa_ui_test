import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { Box } from '../primitives'

const CardBody = forwardRef(({ theme, is, children, ...rest }, ref) => (
  <Box is={is} p={theme.spacing.md} ref={ref} {...rest}>
    {children}
  </Box>
))

CardBody.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
}

CardBody.defaultProps = {
  is: 'div',
  children: undefined,
}

export { CardBody as component }
export default withTheme(CardBody)
