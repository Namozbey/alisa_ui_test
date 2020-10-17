import React, { forwardRef } from 'react'
import Field from './Field'

const OptionField = forwardRef((props, ref) => (
  <Field {...props} is="fieldset" ref={ref} optionList />
))

export default OptionField
