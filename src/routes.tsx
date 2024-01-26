import { createBrowserRouter } from 'react-router-dom'
import { SignIn } from '@/pages/auth/sign-in.tsx'
import { AuthLayout } from '@/pages/_layouts/auth.tsx'
import { SignUp } from '@/pages/auth/sign-up.tsx'
import { AppLayout } from '@/pages/_layouts/app.tsx'
import { Orders } from '@/pages/app/order/order.tsx'
import { Dashboard } from '@/pages/dashboard/dashboard.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])
