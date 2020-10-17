import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import ContentBlock from './ContentBlock'

const Section = forwardRef(({ is, ...rest }, ref) => (
  <ContentBlock is={is} ref={ref} {...rest} />
))

Section.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
}

Section.defaultProps = {
  is: 'section',
}

export default Section
