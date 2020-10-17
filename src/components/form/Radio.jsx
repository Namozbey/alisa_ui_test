import React, { forwardRef } from 'react'
import OptionInput from './OptionInput'

const Radio = forwardRef((props, ref) => (
  <OptionInput {...props} checkbox={false} ref={ref} />
))

export default Radio
