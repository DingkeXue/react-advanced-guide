import { Component, Children, cloneElement } from 'react'

export default class Form extends Component {
  state = {
    formData: {}
  }
  // 用于提交表单数据
  submitForm = (cb) => {
    cb({ ...this.state.formData })
  }

  // 重置表单
  resetForm = () => {
    const { formData } = this.state
    Object.keys(formData).forEach(key => {
      formData[key] = ''
    })
    this.setState({
      formData
    })
  }

  // 设置对应Item的值
  setValue = (name, value) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value
      }
    })
  }

  render() {
    const { children } = this.props
    const renderChildren = []
    // console.log(1111111, children, Children.count())
    Children.forEach(children, (child) => {
      console.log(222222, child)
      if (child.type.displayName === 'formItem') {
        const { name } = child.props
        const Children = cloneElement(child, {
          key: name,
          handleChange: this.setValue,
          value: this.state.formData[name]
        }, child.props.children)
        renderChildren.push(Children)
      }
    })
    return renderChildren
  }
}

Form.displayName = 'form'