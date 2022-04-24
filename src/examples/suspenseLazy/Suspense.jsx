import React, { lazy } from 'react'

export default function Suspense(Component, Api) {
  const SuspenseComp = () => new Promise(async (resolve, reject) => {
    const data = await Api()
    resolve({
      default: (props) => <Component {...props} rdata={data} />
    })
  })
  return lazy(SuspenseComp)
}
