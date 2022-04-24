import React from 'react'
import styled from 'styled-components'
import style from './style.module.css'
import styleScss from './index.scss'

const Button = styled.button`
  height: 36px;
  border-radius: 50%;
`

const SubButton = styled(Button)`
  padding: 10px;
  color: ${ props => props.color ? props.color : 'black' }
`

export default function index() {
  return (
    <div className={style.root}>
      <span className={style.text_bg + ' text'}>index</span>
      <div className={style.child}>hhhh</div>
      <div className={styleScss.text}>woooooo</div>
      <Button>点我</Button>
      <SubButton >继续等我</SubButton>
    </div>
  )
}
