import React, { forwardRef } from 'react'
import BrandText from './BrandText'

/**
 * @see See [BrandText](#brandtext) for API. Sets `type` prop to `warning`.
 */
const WarningText = forwardRef((props, ref) => (
  <BrandText ref={ref} {...props} type="warning" />
))

export default WarningText
