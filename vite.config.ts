import {defineConfig, loadEnv} from 'vite'
import _ from 'lodash'

import react from '@vitejs/plugin-react'
import TsconfigPaths from 'vite-tsconfig-paths'
import PluginRewriteAll from 'vite-plugin-rewrite-all'

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd())

  const isEnvEmpty = _.isEmpty(env)
  if (isEnvEmpty) throw new Error(`Please, provide ${mode} env config.`)

  return {
    server: {
      port: 3000,
      host: true,
    },
    plugins: [react(), TsconfigPaths(), PluginRewriteAll()],
  }
})
