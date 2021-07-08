import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
} from '@material-ui/core'
import { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete'

interface Props {
  confirmAction: () => void
}

export function RemoveDialogue(props: Props) {
  const [dialogState, toggleDialogueState] = useState(false)

  const openDialogue = () => toggleDialogueState(true)
  const closeDialogue = () => toggleDialogueState(false)

  return (
    <span>
      <IconButton onClick={openDialogue} edge="end" aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <Dialog
        // fullScreen={fullScreen}
        open={dialogState}
        onClose={closeDialogue}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Confirm action</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure to remote the current item? You won't be able to undo
            the current action
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={closeDialogue} color="primary">
            Cancel
          </Button>
          <Button
            onClick={props.confirmAction}
            style={{ color: '#eb4034' }}
            autoFocus
          >
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </span>
  )
}
