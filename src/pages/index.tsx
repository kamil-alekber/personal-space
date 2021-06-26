import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from '@material-ui/core'
import { ImageOutlined } from '@material-ui/icons'
import { Article, getAllArticles } from '../utils/content'
import Link from 'next/link'

interface Props {
  articles: Article[]
}

export default function Index(props: Props) {
  const articles = props.articles.map((article) => {
    return (
      <ListItem key={article.id}>
        <ListItemAvatar>
          <Avatar variant="square" src={article.imageUrl}>
            <ImageOutlined />
          </Avatar>
        </ListItemAvatar>
        <Link href={`/articles/${article.id}`}>
          <a>
            <ListItemText primary={article.title} secondary={article.date} />
          </a>
        </Link>
      </ListItem>
    )
  })

  return (
    <List>
      {articles}
      <Divider variant="inset" component="li" />
    </List>
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
