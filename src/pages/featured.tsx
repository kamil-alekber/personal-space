import IconButton from '@material-ui/core/IconButton'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import InfoIcon from '@material-ui/icons/Info'
import React from 'react'
import { Typography } from '@material-ui/core'

export default function Featured() {
  return (
    <div style={{ marginTop: '1rem' }}>
      <Typography color="textSecondary" textAlign="center">
        Hand picked articles for reading at spare time
      </Typography>
      <ImageList
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          overflow: 'hidden',
        }}
      >
        {[
          { img: '/mario-azzi-stuck.jpg', title: 'hello', author: 'kalekber' },
          { img: '/mario-azzi-stuck.jpg', title: 'hello', author: 'kalekber' },
          { img: '/mario-azzi-stuck.jpg', title: 'hello', author: 'kalekber' },
          { img: '/mario-azzi-stuck.jpg', title: 'hello', author: 'kalekber' },
          { img: '/mario-azzi-stuck.jpg', title: 'hello', author: 'kalekber' },
          { img: '/mario-azzi-stuck.jpg', title: 'hello', author: 'kalekber' },
          { img: '/mario-azzi-stuck.jpg', title: 'hello', author: 'kalekber' },
          { img: '/mario-azzi-stuck.jpg', title: 'hello', author: 'kalekber' },
          { img: '/mario-azzi-stuck.jpg', title: 'hello', author: 'kalekber' },
        ].map((item) => (
          <ImageListItem key={item.img} style={{ width: 500, height: 450 }}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${item.title}`}
                  style={{ color: 'rgba(255, 255, 255, 0.54)' }}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}
