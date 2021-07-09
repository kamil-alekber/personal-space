import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@material-ui/core'
import { useState } from 'react'

interface Props {
  confirmAction: () => void
  opener: React.ReactNode
  header: React.ReactNode
  content: React.ReactNode
}

export function DialogComponent(props: Props) {
  const [dialogState, setDialogueState] = useState(false)
  const openDialogue = () => setDialogueState(true)
  const closeDialogue = () => setDialogueState(false)

  return (
    <span>
      <IconButton
        onClick={openDialogue}
        edge="end"
        aria-label="delete"
        style={{ color: '#fff' }}
      >
        {props.opener}
      </IconButton>
      <Dialog
        open={dialogState}
        onClose={closeDialogue}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{props.header}</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.content}</DialogContentText>
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
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </span>
  )
}
