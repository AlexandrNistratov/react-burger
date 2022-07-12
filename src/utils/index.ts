import { formatRelative } from 'date-fns'
import { ru } from "date-fns/locale";

export const dateCalc = (date: any) => {
    return formatRelative(new Date(date), new Date(), {
        locale: ru
    })
}

export const sumOrders = (arr: any, set: any) => {
    const sum = arr?.reduce((acc: any, item: any) => {
        return Number(acc + item?.price)
    }, 0)
    if (sum) {
        set( sum )
    }
}

export const orderStatus = (status: any) => {
   return  status === "done"
                ? "Выполнен"
                 : status === "pending"
                 ? "Готовится"
                : status === "created"
                ? "Создан"
                : "";
}
