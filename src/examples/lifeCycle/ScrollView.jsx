import React, { Component, createElement } from 'react'

export default class ScrollView extends Component {
  node = null
  /** 判断滚动条是否到底，到底执行父级拉取数据函数 */
  handleScrolltolower() {
    const { scrolltolower } = this.props
    const { scrollHeight, scrollTop, offsetHeight } = this.node
    if (scrollHeight === scrollTop + offsetHeight) {
      scrolltolower && scrolltolower()
    }
  }
  handlerScroll = (e) => {
    const { scroll } = this.props
    scroll && scroll()
    this.handleScrolltolower()
  }
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
    this.handleScrolltolower = debounce(this.handleScrolltolower, 200)
  }
  static getDerivedStateFromProps(newProps) {
    return {
      list: newProps?.data?.list || []
    }
  }
  getSnapshotBeforeUpdate() {
    return this.node.scrollHeight
  }
  shouldComponentUpdate(newProps, newState) {
    return newState.list !== this.state.list
  }
  componentDidUpdate(prevProps, prevState,snapshot) {
    console.log('当前容器高度：', this.node.scrollHeight - snapshot)
  }
  componentDidMount() {
    this.node.addEventListener('scroll', this.handlerScroll)
  }
  componentWillUnmount() {
    this.node.removeEventListener('scroll', this.handlerScroll)
  }
  render() {
    const { list } = this.state
    const { component } = this.props
    return (
      <div ref={(node) => this.node = node}>
        {
          list?.map(item => (
            createElement(component, { item, key:item.id }) // 渲染Item列表
          ))
        }
      </div>
    )
  }
}
