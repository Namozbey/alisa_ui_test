import React, { forwardRef } from 'react'

import TailwindTheme from './TailwindTheme'

const withTheme = Component => {
  const WithTheme = forwardRef((props, ref) => (
    <TailwindTheme.Consumer>
      {theme => <Component {...props} ref={ref} theme={theme} />}
    </TailwindTheme.Consumer>
  ))

  WithTheme.displayName = `WithTheme(${Component.displayName})`

  return WithTheme
}

export default withTheme
