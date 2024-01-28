import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'
import { Utensils } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getMonthOrdersAmount } from '@/api/get-month-orders-amount.ts'

export function MonthOrdersAmountCard() {
  const { data: getMonthOrdersAmountFn } = useQuery({
    queryFn: getMonthOrdersAmount,
    queryKey: ['metrics', 'month-orders-amount'],
  })
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos </CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {getMonthOrdersAmountFn && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {getMonthOrdersAmountFn.amount}
            </span>
            <p className="text-xs text-muted-foreground">
              {getMonthOrdersAmountFn.diffFromLastMonth >= 0 ? (
                <span className="text-emerald-400 dark:text-emerald-400">
                  {getMonthOrdersAmountFn.diffFromLastMonth}%
                </span>
              ) : (
                <span className="text-red-500 dark:text-rose-400">
                  -{getMonthOrdersAmountFn.diffFromLastMonth}%
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
