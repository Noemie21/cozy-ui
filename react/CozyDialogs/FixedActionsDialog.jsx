import React from 'react'
import cx from 'classnames/dedupe'

import useCozyDialog from './useCozyDialog'
import Dialog, { DialogTitle, DialogActions, DialogContent } from '../Dialog'
import Divider from '../MuiCozyTheme/Divider'

import dialogPropTypes from './dialogPropTypes'
import DialogBackButton from './DialogBackButton'
import DialogCloseButton from './DialogCloseButton'

const FixedActionsDialog = props => {
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
      <DialogContent>
        <div className="dialogContentInner">
          <div className="dialogTitleFluidContainer">
            <DialogTitle
              {...dialogTitleProps}
              className={cx(dialogTitleProps.className, 'dialogTitleFluid', {
                'u-ellipsis': false
              })}
            >
              {title}
            </DialogTitle>
          </div>
          {content}
        </div>
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

FixedActionsDialog.propTypes = dialogPropTypes

export default FixedActionsDialog
