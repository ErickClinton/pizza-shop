import { createBrowserRouter } from 'react-router-dom'
import { App } from '@/App.tsx'
import { AppLayout } from '@/pages/_layouts/app.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <App /> }],
  },
])
