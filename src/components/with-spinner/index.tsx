import React from 'react'
import { ConnectedComponent } from 'react-redux'

import {
  SpinnerContainer,
  SpinnerOverlay
} from './styles'

interface Props {
  isLoading: boolean
}

function WithSpinner(WrappedComponent: React.FC | ConnectedComponent<any, any>): React.FC<Props> {
  return ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    )
  }
}

export default WithSpinner