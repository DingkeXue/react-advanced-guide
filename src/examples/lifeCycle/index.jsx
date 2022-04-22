import React, { useEffect, useState } from 'react'
import ScrollView from "./ScrollView";
import SingleItem from './SingleItem'

export default function Index() {
  // 记录列表数据
  const [data, setData] = useState({ list: [], page: 0, pageCount: 1 })
  const getData = async() => {
    if (data.page === data.pageCount) return console.log('没有更多数据了')
    const res = await fetchData(data.page + 1)
    if (res.code === 0) {
      setData({
        ...res,
        list: res.page === 1 ? res.list : data.list.concat(res.list)
      })
    }
  }
  /** 到达底部拉取新数据 */
  const handleScrollToLower = () => {
    console.log('已经到地步啦')
    getData()
  }
  /** 初始化请求数据 */
  useEffect(() => {
    getData()
  }, [])
  return (
    <ScrollView
      component={SingleItem}
      data={data}
      scroll={() => {}}
      scrolltolower={handleScrollToLower}
    />
  )
}
