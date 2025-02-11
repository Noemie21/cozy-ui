Pre-built modals ready to be directly used in applications, based on MUI Dialog.

### Usage

* **Dialog** : default Cozy modal
* **ConfirmDialog** : used for confirmation popups
* **IllustrationDialog** : used for illustration as title
* **FixedDialog** : default one but with both title/actions fixed
* **FixedActionsDialog** : default one but with title fluid and actions fixed

Will automatically:

* Be aria-labelled via the title
* Switch to fullscreen on mobile unless the size is small

### Props

* **size** : `<string>` – Can be "s", "m" (default) or "l"
* **open** : `<boolean>` (required) – To open/close the modal
* **onClose** : `<function>` (required) – Triggered function on modal close action
* **onBack** : `<function>` (optional) – Triggered function on modal back action
  * if defined and in desktop mode then a back button is shown in addition to the close button and it will trigger onBack() on click
  * if defined and in mobile mode then the back button will trigger onBack() instead of onClose()
  * if not defined and in mobile mode then the back button will trigger onClose()
* **disableTitleAutoPadding** : `<boolean>` (optional) – Disable title padding calculation that would prevent overlapping with close and back buttons
  * if set to `true` then you should handle those CSS properties by yourself or title will take 100% of width
  * if set to `false` then title will take only available space between close and back buttons regarding which of `onClose` or `onBack` props are defined or not
* **disableGutters** : `<boolean>` – To disable the margins and paddings of the inner content
* **title** : `<node>` – Title of the modal
* **content** : `<node>` – Content of the modal
* **actions** : `<node>` – Actions of the modal
* **actionsLayout** : `<string>` – Can be "row" or "column"

Additionally, all the CozyDialogs support [MUI Dialog's props](https://v3.material-ui.com/api/dialog/).

### Exemples

```jsx
import {
  Dialog,
  ConfirmDialog,
  IllustrationDialog,
  FixedDialog,
  FixedActionsDialog
} from  'cozy-ui/transpiled/react/CozyDialogs'

import { BreakpointsProvider } from 'cozy-ui/transpiled/react/hooks/useBreakpoints'

import Button from 'cozy-ui/transpiled/react/Buttons'
import Alerter from 'cozy-ui/transpiled/react/Alerter'
import Icon from 'cozy-ui/transpiled/react/Icon'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Variants from 'cozy-ui/docs/components/Variants'
import FormControlLabel from 'cozy-ui/transpiled/react/FormControlLabel'
import RadioGroup from 'cozy-ui/transpiled/react/RadioGroup'
import Radio from 'cozy-ui/transpiled/react/Radios'
import FormControl from 'cozy-ui/transpiled/react/FormControl'
import FormLabel from 'cozy-ui/transpiled/react/FormLabel'

import CloudIcon from "cozy-ui/transpiled/react/Icons/Cloud"

const handleClose = () => setState({ modalOpened: !state.modalOpened })
const handleBack = () => {
  Alerter.success('Back button has been pressed', { duration: 5000 })
  setState({ modalOpened: !state.modalOpened })
}

const DialogComponent = state.modal

const ExampleDialogActions = () => {
  return (
    <>
      <Button
        variant="secondary"
        label={'Close Modal'}
        onClick={handleClose}
      />
      <Button
        variant="primary"
        label='Do something'
        onClick={() => alert('click')}
      />
    </>
  )
}

const ConfirmDialogActions = () => {
  return (
    <>
      <Button
        variant="secondary"
        label={'Close Modal'}
        onClick={handleClose}
      />
      <Button
        color="error"
        label='Do something destructive'
        onClick={() => alert('click')}
      />
    </>
  )
}

const dialogTitles = {
  ConfirmDialog: "Are you sure ?",
  IllustrationDialog: <Icon icon={CloudIcon} size="140" />,
  FixedDialog: 'Fixed Dialog',
  FixedActionsDialog: 'Fixed Actions Dialog',
  Dialog: 'Dialog'
}

const dialogContents = {
  ConfirmDialog: "Content of a confirm dialog, precising what the actions will do, and asking the user if she is sure.",
  IllustrationDialog: "An IllustrationDialog contains short content." + content.ada.short,
  FixedDialog: "A FixedDialog can contain very long content. Actions are at the bottom of the content are not visible to the user if she has not scrolled to the bottom. " + content.ada.long,
  FixedActionsDialog: "A FixedActionsDialog can contain very long content. Actions are visible even without scrolling. " + content.ada.long,
  Dialog: "A normal Dialog should contain short content. " + content.ada.short
}

const dialogActions = {
  ConfirmDialog: <ConfirmDialogActions />,
  IllustrationDialog: <ExampleDialogActions />,
  FixedDialog: <ExampleDialogActions />,
  FixedActionsDialog: <ExampleDialogActions />,
  Dialog: <ExampleDialogActions />
}

const dialogs = [
  Dialog,
  ConfirmDialog,
  IllustrationDialog,
  FixedDialog,
  FixedActionsDialog
]

const StateRadio = ({ name, ...props }) => {
  return <input
    type='radio'
    name={name}
    checked={state[name] == props.value}
    onChange={() => setState({ [name]: props.value })}
    {...props}
  />
}

const toggleDialog = dialog => {
  setState({
    modalOpened: !state.modalOpened,
    modal: dialog
  })
}

initialState = {
  modalOpened: isTesting(),
  modal: Dialog,
  size: 'medium',
  content: 'default',
  theme: 'normal',
}

const initialVariants = [{
  actionsLayoutColumn: false,
  titleLong: false,
  disableTitleAutoPadding: false,
  withCloseButton: true,
  withBackButton: false,
  alignTop: false,
  showActions: true,
  disableGutters: false,
  hideTitle: false
}]

;

<BreakpointsProvider>
  <Variants initialVariants={initialVariants}>
    {variant => (
      <>
        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">Content</FormLabel>
          <RadioGroup
            aria-label="radio"
            name="content"
            row
            value={state.content}
            onChange={event => { setState({ content: event.target.value }) }}
          >
            <FormControlLabel
              value="default"
              label="Default"
              control={<Radio />}
            />
            <FormControlLabel
              value="short"
              label="Short"
              control={<Radio />}
            />
            <FormControlLabel
              value="long"
              label="Long"
              control={<Radio />}
            />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset" >
          <FormLabel component="legend">Size</FormLabel>
          <RadioGroup
            aria-label="radio"
            name="size"
            row
            value={state.size}
            onChange={event => { setState({ size: event.target.value }) }}
          >
            <FormControlLabel
              value="small"
              label="Small"
              control={<Radio />}
            />
            <FormControlLabel
              value="medium"
              label="Medium"
              control={<Radio />}
            />
            <FormControlLabel
              value="large"
              label="Large"
              control={<Radio />}
            />
          </RadioGroup>
        </FormControl>
        <div className="u-mt-1">
          {dialogs.map(dialog => (
            <Button
              key={`open-btn-${dialog.name}`}
              data-testid={`open-btn-${dialog.name}`}
              className="u-m-half"
              label={`Open ${dialog.name}`}
              variant="ghost"
              size="small"
              onClick={() => toggleDialog(dialog)}
            />
          ))}
        </div>

        <DialogComponent
          size={DialogComponent !== ConfirmDialog ? state.size : undefined}
          open={state.modalOpened}
          onClose={variant.withCloseButton ? handleClose : undefined}
          onBack={variant.withBackButton ? handleBack : undefined}
          disableTitleAutoPadding={variant.disableTitleAutoPadding}
          align={variant.alignTop ? 'top': 'middle'}
          title={variant.hideTitle
            ? undefined
            : DialogComponent !== IllustrationDialog && variant.titleLong
              ? `${dialogTitles[DialogComponent.name]} - ${content.ada.short}`
              : dialogTitles[DialogComponent.name]
          }
          disableGutters={variant.disableGutters}
          content={
            <Typography variant='body1' color='textPrimary'>
              { state.content == 'default'
              ? dialogContents[DialogComponent.name]
              : state.content == 'long'
                ? content.ada.long
                : content.ada.short}<br/>
              <Button className='u-mt-1 u-ml-0' label="Show an alert" onClick={() => Alerter.success('Hello', { duration: 100000 })}/>
            </Typography>}
          actions={variant.showActions && dialogActions[DialogComponent.name]}
          actionsLayout={variant.actionsLayoutColumn ? 'column' : 'row'}
        />
      </>
    )}
  </Variants>
</BreakpointsProvider>
```
