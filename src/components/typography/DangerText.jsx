import React, { forwardRef } from 'react'
import BrandText from './BrandText'

/**
 * @see See [BrandText](#brandtext) for API. Sets `type` prop to `danger`.
 */
const DangerText = forwardRef((props, ref) => (
  <BrandText ref={ref} {...props} type="danger" />
))

export default DangerText
