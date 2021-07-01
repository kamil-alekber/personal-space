import { useTodo } from '../../hooks/todoProvider'
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
} from '@material-ui/core'
import CommentIcon from '@material-ui/icons/Comment'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'

export default function BoardIndex() {
  const todo = useTodo()
  return (
    <Container style={{ marginTop: '1rem' }}>
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault()
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
        <TextField id="standard-basic" name="title" label="Title" />
        <IconButton aria-label="create-todo" type="submit">
          <AddIcon />
        </IconButton>
      </form>
      <List>
        {todo.todoList.map((value) => {
          const labelId = `checkbox-list-label-${value.title}`
          const localDate = new Date(parseInt(value.created)).toLocaleString()
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
                <IconButton
                  onClick={() => {
                    todo.remove(value.id)
                  }}
                  edge="end"
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )
        })}
      </List>
    </Container>
  )
}
