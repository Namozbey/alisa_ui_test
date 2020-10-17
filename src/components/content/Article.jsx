import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import ContentBlock from './ContentBlock'

const Article = forwardRef(({ is, ...rest }, ref) => (
  <ContentBlock is={is} ref={ref} {...rest} />
))

Article.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
}

Article.defaultProps = {
  is: 'article',
}

export default Article
