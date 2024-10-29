import { defineConfig } from '@wu-component/wu-cli';

export default defineConfig({
  meta: {
    type: 'material',
    lib: {
      libName: "Test",
      name: "test",
      formats: ['umd', 'es', 'cjs', 'iife'],
      fileName: format => `${format}.js`,
      external: {
        react: 'React',
        'react-dom': 'ReactDOM',
      }
    },
    user: {
      // 平台侧的用户名
      userName: '',
      // 平台侧的密码
      password: '',
      // 需要在平台侧创建开发密钥
      accessKey: ''
    }
  }
})