/**
 * forwardRef 的使用
 * 通过GrandFater组件标记ref，来获取孙子组件的实例
 */
import React, { Component, forwardRef } from 'react'

export default class GrandFather extends Component {
  node = null
  render() {
    return (
      <div>
        <RefFather ref={node => this.node = node} />
      </div>
    )
  }
}

class Father extends Component {
  render() {
    return <Son fatherRef={this.props.grandRef }  />
  }
}

const RefFather = forwardRef((props, ref) => <Father grandRef={ref} { ...props } />)

function Son({ fatherRef }) {
  return (
    <div ref={fatherRef}>hhh</div> // GrandFather想获取此元素
  )
}