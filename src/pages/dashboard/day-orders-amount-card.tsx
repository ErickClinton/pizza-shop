import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'
import { Utensils } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getDayOrdersAmount } from '@/api/get-day-orders-amount.ts'

export function DayOrdersAmountCard() {
  const { data: dayOrdersFn } = useQuery({
    queryFn: getDayOrdersAmount,
    queryKey: ['metrics', 'day-orders-amount'],
  })
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Pedidos do dia{' '}
        </CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {dayOrdersFn && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {dayOrdersFn.amount}
            </span>
            <p className="text-xs text-muted-foreground">
              {dayOrdersFn.diffFromYesterday >= 0 ? (
                <span className="text-red-500 dark:text-emerald-400">
                  {dayOrdersFn.diffFromYesterday}%
                </span>
              ) : (
                <span className="text-red-500 dark:text-rose-400">
                  {dayOrdersFn.diffFromYesterday}%
                </span>
              )}{' '}
              em relação a ontem
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
