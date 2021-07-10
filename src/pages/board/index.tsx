import { useTodo } from '../../contexts/todoProvider'
import {
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Container,
  TextField,
  Typography,
} from '@material-ui/core'
import CommentIcon from '@material-ui/icons/Comment'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import { DialogComponent } from '../../components/DialogComponent'

export default function BoardIndex() {
  const todo = useTodo()
  return (
    <Container style={{ marginTop: '1rem' }}>
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault()
          // @ts-ignore
          const titleInput = e.target[0]

          if (titleInput.value) {
            todo.create({
              id: Math.random().toString(),
              title: titleInput.value,
              body: '',
              done: false,
              author: { name: 'kamil', email: 'kamil.alekber@gmail.com' },
              created: Date.now().toString(),
              expires: '',
              tag: ['personal'],
            })
          }
          titleInput.value = ''
        }}
      >
        <TextField
          id="standard-basic"
          name="title"
          label="Title"
          size="small"
        />
        <IconButton aria-label="create-todo" type="submit">
          <AddIcon />
        </IconButton>
      </form>
      <div style={{ marginTop: '1rem' }}>
        <Typography color="textSecondary">
          Current list was built with{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
          >
            Local Storage
          </a>
          , so utilize it at your own risk
        </Typography>
      </div>
      <List>
        {todo.todoList.map((value) => {
          const labelId = `checkbox-list-label-${value.title}`
          const date = new Date(parseInt(value.created))
          const localDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

          return (
            <ListItem
              key={value.id}
              role={undefined}
              dense
              button
              onClick={() => {
                value.done = !value.done
                todo.edit(value.id, value)
              }}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={value.done}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={value.title}
                secondary={localDate}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                  <CommentIcon />
                </IconButton>
                <DialogComponent
                  opener={<DeleteIcon color="error" />}
                  header="Confirm action"
                  content="Are you sure to remove the current item? You won't be able to undo
                  the this action"
                  confirmAction={() => todo.remove(value.id)}
                />
              </ListItemSecondaryAction>
            </ListItem>
          )
        })}
      </List>
    </Container>
  )
}
