const recentTransactions = [
  {
    id: 1,
    title: 'Shopping',
    category: 'shopping',
    createdAt: 'Wed May 05 2021 18:30:33 GMT-0300',
    price: 300,
  },
  {
    id: 2,
    title: 'Grocery',
    category: 'grocery',
    createdAt: 'Wed May 05 2021 14:57:33 GMT-0300',
    price: 45,
  },
  {
    id: 3,
    title: 'Gym',
    category: 'physicalActivity',
    createdAt: 'Wed May 04 2021 20:15:33 GMT-0300',
    price: 125,
  },
  {
    id: 4,
    title: 'Laundry',
    category: 'laundry',
    createdAt: 'Wed May 04 2021 10:20:33 GMT-0300',
    price: 90,
  },
  {
    id: 5,
    title: 'Car Repair',
    category: 'car',
    createdAt: 'Wed May 02 2021 14:57:33 GMT-0300',
    price: 250,
  },
]

export const getRecentTransactions = () => recentTransactions;
