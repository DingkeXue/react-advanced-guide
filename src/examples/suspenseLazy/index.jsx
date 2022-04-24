import React, { Suspense } from 'react';
import AsyncComponent from './Suspense'
import Test from './Test'
import getData from './api'

export default function Index() {
  const Component = AsyncComponent(Test, getData)
  return (
    <div>
      <Suspense fallback={<div>loading....</div>}>
        <Component />
      </Suspense>
    </div>
  )
}
