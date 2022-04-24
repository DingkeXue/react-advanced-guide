/*
 * @Author: dingke
 * @Date: 2022-04-24 15:23:36
 * @Description: webpack基础配置
 */
const baseConfig = (env, argv) => {
  const config = {
    module: {
      rules: [
        {
          test: /\.scss/,
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[path][name]---[local]---[hash:base64:5]'
                }
              }
            },
            'sass-loader'
          ]
        }
      ]
    }
  }

  return config
}

export default baseConfig