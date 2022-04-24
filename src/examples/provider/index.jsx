/**
 * Provider-Consumer 使用
 */
import React, { createContext, PureComponent, useContext, useState } from 'react'

const ThemeContext = createContext(null)
const Theme = {
  dark: { color: 'gray', background: 'black', type: 'dark' },
  light: { color: 'red', background: 'green', type: 'light' }
}

function Checkbox({ label, name, onChange }) {
  const { type, color } = useContext(ThemeContext)
  return (
    <div onClick={onChange}>
      <label htmlFor="name">{label}</label>
      <input type="checkbox" name={name} onChange={onChange} value={type} checked={type === name} style={{ color }} />
    </div>
  )
}

class App extends PureComponent {
  static contextType = ThemeContext
  render() {
    const { background, setTheme } = this.context
    return (
      <div className='theme-wrap' style={{ background }}>
        <Checkbox label='dark' name='dark' onChange={() => setTheme(Theme.dark)} />
        <Checkbox label='light' name='light' onChange={ () => setTheme(Theme.light)} />
      </div>
    )
  }
}

export default function Index() {
  const [theme, setTheme ] = useState(Theme.dark)
  return (
    <ThemeContext.Provider value={{ ...theme, setTheme }}>
      <App />
    </ThemeContext.Provider>
  )
}
