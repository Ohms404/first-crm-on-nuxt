export interface IMenuItems {
  name: string,
  icon: string,
  url: string
}


export const Menu: IMenuItems[] = [
  {
    name: 'Home',
    icon: 'radix-icons:dashboard',
    url: '/'
  },
  {
    name: 'Products',
    icon: 'mage:basket',
    url: '/products'
  },
  {
    name: 'Payments',
    icon: 'material-symbols-light:payments-outline',
    url: '/pay',
  },
  {
    name: 'Orders',
    icon: 'mdi:archive-check-outline',
    url: '/orders',
  },
  {
    name: 'Customers',
    icon: 'ri:group-line',
    url: '/customers'
  },
  {
    name: 'Feedback',
    icon: 'ic:outline-feedback',
    url: '/feedback'
  },
  {
    name: 'Settings',
    icon: 'radix-icons:gear',
    url: '/settings'
  },
  {
    name: 'Help center',
    icon: 'fluent-mdl2:help',
    url: '/help'
  }
]