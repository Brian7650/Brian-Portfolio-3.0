import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-pdf', 'pdfjs-dist'],
  },
  assetsInclude: ['**/*.pdf', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
});
