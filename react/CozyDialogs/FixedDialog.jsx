import React from 'react'
import cx from 'classnames'

import useCozyDialog from './useCozyDialog'
import Dialog, { DialogTitle, DialogActions, DialogContent } from '../Dialog'
import Divider from '../MuiCozyTheme/Divider'

import dialogPropTypes from './dialogPropTypes'
import DialogBackButton from './DialogBackButton'
import DialogCloseButton from './DialogCloseButton'

const FixedDialog = props => {
  const { onClose, onBack, title, content, actions, actionsLayout } = props
  const {
    dialogProps,
    dialogTitleProps,
    fullScreen,
    id,
    dialogActionsProps
  } = useCozyDialog(props)

  const onBackOrClose = onBack || onClose

  return (
    <Dialog {...dialogProps}>
      {!fullScreen && onClose && (
        <DialogCloseButton
          data-test-id={`modal-close-button-${id}`}
          onClick={onClose}
        />
      )}
      {!fullScreen && onBack && (
        <DialogBackButton
          data-test-id={`modal-back-button-${id}`}
          onClick={onBack}
        />
      )}
      {fullScreen && onBackOrClose && (
        <DialogBackButton
          data-test-id={`modal-backclose-button-${id}`}
          onClick={onBackOrClose}
        />
      )}
      <DialogTitle {...dialogTitleProps}>{title}</DialogTitle>
      <Divider />
      <DialogContent>
        <div className="dialogContentInner">{content}</div>
      </DialogContent>
      <Divider />
      {actions && (
        <DialogActions
          {...dialogActionsProps}
          disableSpacing
          className={cx({ columnLayout: actionsLayout == 'column' })}
        >
          {actions}
        </DialogActions>
      )}
    </Dialog>
  )
}

FixedDialog.propTypes = dialogPropTypes

export default FixedDialog
