import {
  Avatar,
  Chip,
  Divider,
  FormControl,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Select,
} from '@material-ui/core'
import { ImageOutlined } from '@material-ui/icons'
import Link from 'next/link'
import { useState } from 'react'
import { Article, getAllArticles } from '../utils/content'

interface Props {
  articles: Article[]
}

const SORT_OPTS = ['DATE_DESC', 'DATE_ASC']

export default function Index(props: Props) {
  const [sorting, setSorting] = useState(SORT_OPTS[0])

  const articles = props.articles
    .filter((a) => !a.private)
    .map((article) => {
      return (
        <ListItem key={article.id}>
          <Link href={`/articles/${article.id}`}>
            <a>
              <ListItemAvatar style={{ marginRight: '1.5rem' }}>
                <Avatar
                  style={{ width: 100, height: 100 }}
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
                        style={{ marginRight: '0.5rem' }}
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
      <FormControl size="small">
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
