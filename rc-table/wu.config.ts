import { defineConfig } from '@wu-component/wu-cli';

export default defineConfig({
  meta: {
    type: 'material',
    lib: {
      libName: "RcTable",
      name: "rc-table",
      formats: ['umd', 'es', 'cjs', 'iife'],
      fileName: format => `${format}.js`,
      external: {
        react: 'React',
        'react-dom': 'ReactDOM',
      }
    },
    user: {
      // 平台侧的用户名
      userName: 'new-user',
      // 平台侧的密码
      password: '00000000',
      // 需要在平台侧创建开发密钥
      accessKey: 'c1d52709d0da4b03839b245edbbef2df'
    }
  }
})