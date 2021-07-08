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
  Typography,
} from '@material-ui/core'
import CommentIcon from '@material-ui/icons/Comment'
import AddIcon from '@material-ui/icons/Add'
import { RemoveDialogue } from '../../components/RemoveDialog'

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
          Current list uses local storage, so utilize it at your own risk
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
                <RemoveDialogue confirmAction={() => todo.remove(value.id)} />
              </ListItemSecondaryAction>
            </ListItem>
          )
        })}
      </List>
    </Container>
  )
}
