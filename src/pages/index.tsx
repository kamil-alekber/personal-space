import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  makeStyles,
  createStyles,
  Chip,
  Theme,
} from '@material-ui/core'
import { ImageOutlined } from '@material-ui/icons'
import { Article, getAllArticles } from '../utils/content'
import Link from 'next/link'

interface Props {
  articles: Article[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
export default function Index(props: Props) {
  const classes = useStyles()
  const articles = props.articles.map((article) => {
    return (
      <ListItem key={article.id}>
        <ListItemAvatar className={classes.margin}>
          <Avatar
            className={classes.large}
            variant="square"
            src={article.imageUrl}
          >
            <ImageOutlined />
          </Avatar>
        </ListItemAvatar>

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
          secondary={article.date}
        />
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
