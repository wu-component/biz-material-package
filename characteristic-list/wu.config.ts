
import { defineConfig } from '@wu-component/wu-cli';

export default defineConfig({
  meta: {
    type: 'material',
    lib: {
      libName: "TestMaterial",
      name: "test-material",
      formats: ['umd', 'es', 'cjs', 'iife'],
      fileName: format => `${format}.js`,
      external: {
        react: 'React',
        'react-dom': 'ReactDOM',
      }
    },
    user: {
      userName: '',
      password: '',
      // 需要在平台侧创建开发这密钥
      accessKey: ''
    }
  }
})