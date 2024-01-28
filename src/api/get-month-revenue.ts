import { api } from '@/lib/axios.ts'

export interface GetMonthRevenueOrdersAmountProps {
  receipt: number
  diffFromLastMonth: number
}
export async function getMonthRevenueOrdersAmount() {
  const response = await api.get<GetMonthRevenueOrdersAmountProps>(
    '/metrics/month-receipt',
  )
  return response.data
}
