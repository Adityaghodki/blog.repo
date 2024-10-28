import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Use any preferred port
  },
  root: '.', // Ensures Vite uses the current folder as root
});
