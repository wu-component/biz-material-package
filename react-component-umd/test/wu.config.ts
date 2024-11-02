import { defineConfig } from '@wu-component/wu-cli';

export default defineConfig({
  meta: {
    type: 'material',
    lib: {
      libName: "Test",
      name: "test",
      formats: ['umd', 'es', 'cjs', 'iife'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      external: {
        react: 'React',
        'react-dom': 'ReactDOM',
      }
    },
    user: {
      userName: 'gpt-admin',
      password: '00000000',
      // 需要在平台侧创建开发这密钥
      accessKey: '7ff55cc818a24278b3bac33dffef3a2d',
      // host: 'http://192.168.0.102'
      host: 'http://127.0.0.1:10009',
      debug: true
    }
  },
  plugins: []
})
