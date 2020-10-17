import React, { forwardRef } from 'react'
import OptionInput from './OptionInput'

const Checkbox = forwardRef((props, ref) => (
  <OptionInput ref={ref} {...props} checkbox />
))

export default Checkbox
