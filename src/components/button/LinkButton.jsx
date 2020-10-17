import React, { forwardRef } from 'react'

import Button from './Button'

/**
 * @see See [Button](#button-2) for API. Sets `buttonStyle` prop to `link`.
 */
const LinkButton = forwardRef((props, ref) => (
  <Button ref={ref} {...props} buttonStyle="link" />
))

export default LinkButton
