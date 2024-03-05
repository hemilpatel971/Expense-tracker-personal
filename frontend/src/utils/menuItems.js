import {dashboard, expenses, transactions, trend} from './Icons'
export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icons: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "View Transactions",
        icons: transactions,
        link: '/dashboard'
    },
    {
        id: 3,
        title: 'Incomes',
        icons: trend,
        link: '/dashboard'
    },
    {
        id: 4,
        title: 'Expenses',
        icons: expenses,
        link: '/dashboard'
    }
]