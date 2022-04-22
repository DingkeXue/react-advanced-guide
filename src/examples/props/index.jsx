import React, { useRef } from 'react'
import Form from "./Form";
import FormItem from './FormItem'
import Input from "./Input";

export default function Index() {
  const form = useRef(null)
  const submit = () => {
    // 提交表单
    form.current.submitForm(formValue => {
      console.log(formValue)
    })
  }
  return (
    <div>
      <Form ref={form}>
        <FormItem name="name" label="我是">
          {/* <div></div> */}
          <Input />
        </FormItem>
        <FormItem name="age" label="年龄">
          <Input />
        </FormItem>
        <div className="btns">
          <button className="submit" onClick={ submit }>提交</button>
        </div>
      </Form>
    </div>
  )
}
