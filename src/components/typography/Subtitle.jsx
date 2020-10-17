import React, { forwardRef } from 'react'
import Title from './Title'

/**
 * @see See [Title](#title) for prop type definitions. Sets `subtitle` to `true`.
 */
const Subtitle = forwardRef((props, ref) => (
  <Title ref={ref} {...props} subtitle />
))

export default Subtitle
