import { Article, getArticle, getArticleIds } from '../../utils/content'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

interface Props {
  article: Article & { content: string }
}

export default function ArticleId(props: Props) {
  return (
    <article>
      <Head>
        <title>{props?.article?.title}</title>
      </Head>
      <br />
      {props.article.private ? (
        'The world is not yet ready to see this post'
      ) : (
        <div>
          <small>Posted: {props?.article?.date}</small>
          <h3>{props.article.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: props?.article?.content }} />
        </div>
      )}
    </article>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getArticleIds()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = await getArticle(params.id + '')

  return {
    props: {
      article,
    },
  }
}
