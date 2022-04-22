import React from 'react'

export default function SingleItem({ item }) {
  return (
    <div>
      <img src={item.gfitImage} alt="item_iamge" />
    </div>
  )
}
