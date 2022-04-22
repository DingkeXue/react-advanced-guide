const fs = require('fs')
const babel = require('@babel/core')

fs.readFile('./index.jsx', (e, data) => {
  if (e) return
  const code = data.toString('utf-8')
  const result = babel.transformSync(code, {
    plugins: ["@babel/plugin-transform-react-jsx"],
  })
  console.log(2222222, result.code)
  fs.writeFile('./index2.jsx', result.code, () => {})
})