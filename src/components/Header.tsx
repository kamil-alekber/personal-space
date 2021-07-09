import {
  AppBar,
  Button,
  Toolbar,
  Badge,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core'
import Link from 'next/link'
import { DialogComponent } from './DialogComponent'
import MailIcon from '@material-ui/icons/Mail'
import { useNotification } from '../hooks/notificationProvider'
import ImageIcon from '@material-ui/icons/Image'

export function Header() {
  const notify = useNotification()

  return (
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton edge="start" color="inherit" aria-label="menu"> */}
        {/* <MenuIcon /> */}
        {/* </IconButton> */}
        <Link href="/">
          <a style={{ color: '#fff' }}>
            <Button color="inherit">Home</Button>
          </a>
        </Link>
        <Link href="/featured">
          <a style={{ color: '#fff' }}>
            <Button color="inherit">Featured</Button>
          </a>
        </Link>
        <Link href="/board">
          <a style={{ color: '#fff' }}>
            <Button color="inherit">Board</Button>
          </a>
        </Link>
        <DialogComponent
          content={
            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            >
              {notify.messages.map((item) => {
                return (
                  <ListItem key={item.id}>
                    <ListItemAvatar>
                      <Avatar>
                        <ImageIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.text}
                      secondary={item.created}
                    />
                  </ListItem>
                )
              })}
            </List>
          }
          header="Recent notifications"
          opener={
            <Badge
              color="secondary"
              badgeContent={notify.messages.filter((i) => !i.seen).length}
            >
              <MailIcon />
            </Badge>
          }
          confirmAction={console.log}
        />
      </Toolbar>
    </AppBar>
  )
}
