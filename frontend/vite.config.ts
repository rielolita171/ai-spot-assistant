import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite'; // <-- Add this
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
        tailwindcss(), // <-- Add this before sveltekit()
        sveltekit()
    ]
});