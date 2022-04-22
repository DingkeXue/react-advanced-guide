import React, { cloneElement, isValidElement } from 'react'

export default function FormItem({ name, children, value, label, handleChange }) {

  const onChange = (value) => {
    handleChange(name, value)
  }

  return (
    <div>
      <span className='label'>{name}</span>
      { isValidElement(children) && children.type.displayName === 'input'
        ? cloneElement(children, { onChange, value })
        : null 
      }
    </div>
  )
}

FormItem.displayName = 'formItem'