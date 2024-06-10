import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "dist", // Asegúrate de que esto coincida con el directorio en 'firebase.json'
    },
});
