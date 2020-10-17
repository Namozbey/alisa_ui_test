import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { Box } from '../primitives'
import { InfoText } from '../typography'

/**
 * @see Renders as [InfoText](#infotext) component by default
 */
const HelpText = forwardRef(({ is, field: { helpId }, ...rest }, ref) => (
  <Box is={is} id={helpId} ref={ref} {...rest} />
))

HelpText.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  field: PropTypes.shape({
    helpId: PropTypes.string,
  }),
  size: PropTypes.number,
}

HelpText.defaultProps = {
  is: InfoText,
  field: {},
  size: 1,
}

export default HelpText
