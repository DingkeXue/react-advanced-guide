/*
 * 合并转发ref
 */
import React, { Component, createRef, forwardRef, useEffect, useRef } from 'react'

export default class Home extends Component {
  node = createRef(null)
  render() {
    return (
      <div>
        <RefIndex ref={this.node} />
      </div>
    )
  }
}

const RefIndex = forwardRef((props, ref) => <Index ref={ref} {...props} />)
function Index({ ref }) {
  const node = useRef(null)
  const child = useRef(null)

  useEffect(() => {
    ref.current = {
      node: node,
      child: child
    }
  }, [])

  return (
    <div>
      <div ref={node}>hhh</div>
      <Child ref={child} />
    </div>
  )
}

function Child() {
  return (<div>iii</div>)
}