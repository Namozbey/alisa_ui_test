import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { Title } from '../typography'

const ContentTitle = forwardRef(
  ({ content: { id }, visuallyHidden, ...rest }, ref) => (
    <Title id={id} visuallyHidden={visuallyHidden} {...rest} />
  ),
)

ContentTitle.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.string,
  }),
  visuallyHidden: PropTypes.bool,
}

ContentTitle.defaultProps = {
  content: {},
  visuallyHidden: false,
}

export default ContentTitle
