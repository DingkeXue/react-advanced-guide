import React, { Component, forwardRef, useEffect, useRef } from 'react'

const HOCFather = HOC(Child)
export default function Index() {
  const node = useRef(null)

  useEffect(() => {
    console.log(node.current)
  }, [])
  return (
    <div>
      <HOCFather ref={node} />
    </div>
  )
}

function HOC(Comp) {
  class Wrap extends Component {
    render() {
      const { forwardedRef, ...props } = this.props
      return <Comp ref={forwardedRef} {...props} />
    }
  }
  return forwardRef((props, ref) => <Wrap forwardedRef={ref} {...props} />)
}

function Child() {
  // const node = useRef(null)
  return (
    <div>child</div>
  )
}