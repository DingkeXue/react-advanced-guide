import React from 'react'

export default function Input({ onChange, value }) {
  return (
    <div>
      <input value={value} onChange={(e) => onChange(e.target.value) } />
    </div>
  )
}

Input.displayName = 'input'