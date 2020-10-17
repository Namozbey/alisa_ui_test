import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import ContentBlock from './ContentBlock'

const Aside = forwardRef(({ is, ...rest }, ref) => (
  <ContentBlock is={is} ref={ref} {...rest} />
))

Aside.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
}

Aside.defaultProps = {
  is: 'aside',
}

export default Aside
