import styles from './styles.styl'

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'

import DeviceLaptopIcon from 'cozy-ui/transpiled/react/Icons/DeviceLaptop'

const ButtonClient = props => {
  const { label, href, onClick, className, icon } = props

  return (
    <a
      href={href}
      // eslint-disable-next-line react/jsx-no-target-blank
      target="_blank"
      className={cx(styles['c-btn-client'], className)}
      onClick={onClick}
      rel="noreferrer"
    >
      <figure>
        <Icon icon={icon || DeviceLaptopIcon} size="32" />
      </figure>
      <span>{label}</span>
    </a>
  )
}

ButtonClient.propTypes = {
  /** Button's label */
  label: PropTypes.string.isRequired,
  /** Button's hyperlink */
  href: PropTypes.string.isRequired,
  /** Custom classNames to apply to the component */
  className: PropTypes.string,
  /** Function `onClick` to be called on top of the hyperlink */
  onClick: PropTypes.func,
  /** Custom icon to display. If undefined then DeviceLaptop is used as default icon */
  icon: PropTypes.elementType
}

ButtonClient.defaultProps = {
  className: ''
}

export default ButtonClient
