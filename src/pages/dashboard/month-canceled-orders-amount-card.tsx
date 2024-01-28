import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'
import { DollarSign } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getMonthCanceledOrdersAmount } from '@/api/get-month-canceled-orders-amount.ts'

export function MonthCanceledOrdersAmountCard() {
  const { data: getMonthCanceledOrdersAmountFn } = useQuery({
    queryFn: getMonthCanceledOrdersAmount,
    queryKey: ['metrics', 'month-canceled-orders-amount'],
  })
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Cancelamentos</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {getMonthCanceledOrdersAmountFn && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {getMonthCanceledOrdersAmountFn.amount}
            </span>
            <p className="text-xs text-muted-foreground">
              {getMonthCanceledOrdersAmountFn.diffFromLastMonth >= 0 ? (
                <span className="text-emerald-400 dark:text-emerald-400">
                  {getMonthCanceledOrdersAmountFn.diffFromLastMonth}%
                </span>
              ) : (
                <span className="text-red-500 dark:text-rose-400">
                  -{getMonthCanceledOrdersAmountFn.diffFromLastMonth}%
                </span>
              )}{' '}
              em relação ao mês passado
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
