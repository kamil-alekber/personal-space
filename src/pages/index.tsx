import {
  Avatar,
  Chip,
  createStyles,
  Divider,
  FormControl,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  MenuItem,
  Select,
  Theme,
} from '@material-ui/core'
import { ImageOutlined } from '@material-ui/icons'
import Link from 'next/link'
import { useState } from 'react'
import { Article, getAllArticles } from '../utils/content'

interface Props {
  articles: Article[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
    margin: {
      marginRight: theme.spacing(1.5),
    },
  })
)
const SORT_OPTS = ['DATE_DESC', 'DATE_ASC']

export default function Index(props: Props) {
  const [sorting, setSorting] = useState(SORT_OPTS[0])
  const classes = useStyles()

  const articles = props.articles
    .filter((a) => !a.private)
    .map((article) => {
      return (
        <ListItem key={article.id}>
          <Link href={`/articles/${article.id}`}>
            <a>
              <ListItemAvatar className={classes.margin}>
                <Avatar
                  className={classes.large}
                  variant="square"
                  src={article.imageUrl}
                >
                  <ImageOutlined />
                </Avatar>
              </ListItemAvatar>
            </a>
          </Link>
          <ListItemText
            primary={
              <div>
                <div>
                  <Link href={`/articles/${article.id}`}>
                    <a>{article.title}</a>
                  </Link>
                </div>
                <div>
                  {article.tags.map((tag, i) => {
                    return (
                      <Chip
                        className={classes.margin}
                        key={i}
                        label={tag}
                        size="small"
                      />
                    )
                  })}
                </div>
              </div>
            }
            secondary={
              <div>
                <div>{article.author.name}</div>
                <div>{article.date}</div>
              </div>
            }
          />
        </ListItem>
      )
    })

  // TODO: make a proper sorting
  if (sorting !== 'DATE_DESC') articles.reverse()

  return (
    <div style={{ marginTop: '0.5rem' }}>
      <FormControl className={classes.formControl}>
        <Select
          value={sorting}
          onChange={(e) => {
            setSorting(`${e.target.value}`)
          }}
        >
          {SORT_OPTS.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <List>
        {articles}
        <Divider variant="inset" component="li" />
      </List>
    </div>
  )
}

export async function getStaticProps() {
  const articles = getAllArticles()
  return {
    props: {
      articles,
    },
  }
}
