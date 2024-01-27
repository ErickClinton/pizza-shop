import { api } from '@/lib/axios.ts'

export interface GetProfileProps {
  name: string
  id: string
  email: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}
export async function getProfile(): Promise<GetProfileProps> {
  const response = await api.get('/me')
  return response.data
}
