import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Speech_To_Text_Converter-react-project/",
  plugins: [react()],
});
