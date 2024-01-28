import { api } from '@/lib/axios.ts'

export interface GetDayOrdersAmountProps {
  amount: number
  diffFromYesterday: number
}
export async function getDayOrdersAmount() {
  const response = await api.get<GetDayOrdersAmountProps>(
    '/metrics/day-orders-amount',
  )
  console.log(response.data)

  return response.data
}
