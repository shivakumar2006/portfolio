import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        mooli: ['Mooli', 'sans-serif'],
      },
      // screens: {
      //   'xs': '410px', // for 410px custom breakpoint
      // }
    },
  },
  plugins: [
    react(),
    tailwindcss(
      {
      config: {
        theme: {
          extend: {
            fontFamily: {
              mooli: ['Mooli', 'sans-serif'],
            },
            screens: {
              xs: '410px',
            },
          },
        },
        plugins: [],
      },
    },
    ),
  ],
  server: {
    host: '0.0.0.0',  // ✅ important for LAN access
    port: 5173
  }
})
