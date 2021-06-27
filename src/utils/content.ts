import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const contentDir = path.join(process.cwd(), 'src/content')

export interface Article {
  id: string
  title: string
  date: string
  imageUrl: string
  tags: string[]
  author: {
    name: string
    email: string
  }
}

export function getArticleIds() {
  const fileNames = fs.readdirSync(contentDir)

  const normalizeNames = fileNames.map((name) => {
    return {
      params: {
        id: name.replace('.md', ''),
      },
    }
  })

  return normalizeNames
}

export function getAllArticles() {
  const fileNames = fs.readdirSync(contentDir)
  const data = fileNames.map((name) => {
    const id = name.replace(/\.md$/, '')
    const fullPath = path.join(contentDir, name)

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data,
    }
  }) as Article[]

  data.sort((a, b) => {
    return a.date < b.date ? 1 : a.date > b.date ? -1 : 0
  })
  return data
}

export async function getArticle(id: string) {
  const fullPath = path.join(contentDir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  return {
    id,
    content: processedContent.contents,
    ...matterResult.data,
  }
}
