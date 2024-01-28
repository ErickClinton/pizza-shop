import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'
import { DollarSign } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getMonthRevenueOrdersAmount } from '@/api/get-month-revenue.ts'

export function MonthRevenueCard() {
  const { data: getMonthRevenueOrdersAmountFn } = useQuery({
    queryFn: getMonthRevenueOrdersAmount,
    queryKey: ['metrics', 'month-receipt'],
  })
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total{' '}
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {getMonthRevenueOrdersAmountFn && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {getMonthRevenueOrdersAmountFn.receipt.toLocaleString('Pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <p className="text-xs text-muted-foreground">
              {getMonthRevenueOrdersAmountFn.diffFromLastMonth >= 0 ? (
                <span className="text-emerald-400 dark:text-emerald-400">
                  {getMonthRevenueOrdersAmountFn.diffFromLastMonth}%
                </span>
              ) : (
                <span className="text-red-500 dark:text-rose-400">
                  -{getMonthRevenueOrdersAmountFn.diffFromLastMonth}%
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
