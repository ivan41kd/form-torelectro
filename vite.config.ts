import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		chunkSizeWarningLimit: 1700,
		manifest: true,
		reportCompressedSize: true,
		rollupOptions: {
			output: {
				manualChunks(id) {
					const HugeLibraries = [
						'@tanstack/react-router',
						'@tanstack/react-table',
						'@aws-sdk/client-s3',
						'lucide-react',
						'zustand',
					];
					if (HugeLibraries.some(libName => id.includes(`node_modules/${libName}`))) {
						return id.toString().split('node_modules/')[1].split('/')[0].toString();
					}
				},
			},
		},
	},
	resolve: {
		alias: {
			'~@': path.resolve(__dirname, './src'),
		},
	},
	server: {
		strictPort: true,
		host: '0.0.0.0',
		port: 3000,
	},
	define: {
		global: 'globalThis',
	},
	preview: {
		host: '0.0.0.0',
		port: 4173,
		strictPort: true,
	},
});
