import './global.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes.tsx'
import { Toaster } from 'sonner'
import { ThemeProvider } from '@/components/ui/theme-provider.tsx'
export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <Toaster richColors />
        <Helmet titleTemplate="%s | Pizza Shop" />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
