import React, { forwardRef } from 'react'

import Button from './Button'

/**
 * @see See [Button](#button-2) for API. Sets `buttonStyle` prop to `outline`.
 */
const OutlineButton = forwardRef((props, ref) => (
  <Button ref={ref} {...props} buttonStyle="outline" />
))

export default OutlineButton
