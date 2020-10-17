import React, { forwardRef } from 'react'
import OptionList from './OptionList'

const RadioList = forwardRef((props, ref) => (
  <OptionList {...props} ref={ref} />
))

export default RadioList
