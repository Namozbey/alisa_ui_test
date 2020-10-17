import React, { forwardRef } from 'react'
import BrandText from './BrandText'

/**
 * @see See [BrandText](#brandtext) for API. Sets `type` prop to `info`.
 */
const InfoText = forwardRef((props, ref) => (
  <BrandText ref={ref} {...props} type="info" />
))

export default InfoText
