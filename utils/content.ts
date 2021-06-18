import path from 'path'
import slug from 'slug'
import fs from 'fs'
import matter from 'gray-matter'

export function getProductIds() {
  const contentDir = path.join(process.cwd(), 'content')
  const fileNames = fs.readdirSync(contentDir)

  const normalizeNames = fileNames.map((name) => {
    return {
      params: {
        id: slug(name.replace('.md', '')),
      },
    }
  })

  return normalizeNames
}

export function getAllProducts() {
  const contentDir = path.join(process.cwd(), 'content')
  const fileNames = fs.readdirSync(contentDir)
  const data = fileNames.map((name) => {
    const id = slug(name.replace(/\.md$/, ''))
    const fullPath = path.join(contentDir, name)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)
    return {
      id,
      ...matterResult.data,
    }
  })
  return data
}

export function getProduct(id: string) {
  const contentDir = path.join(process.cwd(), 'content')
  const fullPath = path.join(contentDir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  return {
    id,
    content: matterResult.content,
    ...matterResult.data,
  }
}
