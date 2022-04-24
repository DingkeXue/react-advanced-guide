/**
 * ref的使用方式
 */
import React, { Component, createRef } from 'react'

class Child extends Component {
  render () {
    return <div></div>
  }
}

/** 方式一：字符串 */
export default class Parent1 extends Component {
  componentDidMount() {
    console.log(this.refs) // { currentDOM: div, currentChild: Child } 
  }
  render() {
    return (
      <div>
        <div ref='currentDom'>hhhh</div>
        <Child ref='currentChild' />
      </div>
    )
  }
}

/** 方式二：对象 */
class Parent2 extends Component {
  currentDom = createRef(null)
  currentChild = createRef(null)

  componentDidMount() {
    console.log(this.currentDom, this.currentChild) // { current: div }, { current: Child }
  }

  render() {
    return (
      <div>
        <div ref={this.currentDom}>hhh</div>
        <Child ref={this.currentChild} />
      </div>
    )
  }
}

/** 方式三：函数 */
class Parent3 extends Component {
  currentDom = null
  currentChild = null
  render() {
    return (
      <div>
        <div ref={node => this.currentDom = node}>hhh</div>
        <Child ref={node => this.currentChild = node} />
      </div>
    )
  }
}