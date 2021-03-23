import React, { memo } from 'react'
import PropTypes from 'prop-types'

import LoadingStyled from './styled'

const Loading = ({ id, className }) => (
  <LoadingStyled id={`${id}-wrapper`} data-testid={`${id}-wrapper`} className={className}>
    <div id={id} data-testid={id} className="spinner" />
  </LoadingStyled>
)

Loading.defaultProps = {
  id: 'loading-component',
  className: '',
}

Loading.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
}

export default memo(Loading)
