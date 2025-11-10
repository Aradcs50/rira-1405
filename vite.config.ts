
  import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      'figma:asset/08272a22e54676bb269cef681cd95bdc7d0a34ff.png': path.resolve(__dirname, './src/assets/08272a22e54676bb269cef681cd95bdc7d0a34ff.png'),
      // بقیه آلیاس‌ها رو حذف یا اگر لازم بود اضافه کن
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
  },
});
