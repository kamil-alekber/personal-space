import { AppBar, Button, Toolbar } from '@material-ui/core'
import Link from 'next/link'

export function Header() {
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
      </Toolbar>
    </AppBar>
  )
}
