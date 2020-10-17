import React, { forwardRef } from 'react'
import OptionList from './OptionList'

const CheckboxList = forwardRef((props, ref) => (
  <OptionList ref={ref} {...props} checkbox />
))

export default CheckboxList
