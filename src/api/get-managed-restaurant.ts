import { api } from '@/lib/axios.ts'

export interface GetManagedRestaurantProps {
  name: string
  id: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagedRestaurant(): Promise<GetManagedRestaurantProps> {
  const response = await api.get('/managed-restaurant')
  return response.data
}
