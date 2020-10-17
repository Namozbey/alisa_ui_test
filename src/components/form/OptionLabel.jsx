import React, { forwardRef } from 'react'
import Label from './Label'

const OptionLabel = forwardRef((props, ref) => (
  <Label {...props} is="legend" ref={ref} optionList />
))

export default OptionLabel
