import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$assets: path.resolve('./src/routes/assets')
		}
	},
	base: "/paragonrobotics-site/" // Ensure this matches your repo name
});
