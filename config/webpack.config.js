import merge from 'webpack-merge'
import baseConfig from './webpack.base.config'
import devConfig from './webpack.dev.config'
import proConfig from './webpack.pro.config'

const mergeConfig =  (env, argv) => {
  const config = argv.mode === 'development' ? devConfig : proConfig
  return merge(baseConfig(env, argv), config)
}

export default mergeConfig