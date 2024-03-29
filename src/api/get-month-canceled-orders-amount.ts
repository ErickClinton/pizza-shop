import { api } from '@/lib/axios.ts'

export interface GetMonthCanceledOrdersAmountProps {
  amount: number
  diffFromLastMonth: number
}
export async function getMonthCanceledOrdersAmount() {
  const response = await api.get<GetMonthCanceledOrdersAmountProps>(
    '/metrics/month-canceled-orders-amount',
  )

  return response.data
}
