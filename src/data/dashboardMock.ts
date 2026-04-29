export const dashboardMock = {
  user: {
    name: 'Айгерим Смагулова',
    currentPackage: 'VIP',
    currentStatus: 'Лидер',
    referralLink: 'https://safilife.kz/ref/aigerim88',
    balance: 145000,
    availableForWithdrawal: 120000,
    pvPoints: 3250,
    leftBranchVolume: 12000,
    rightBranchVolume: 8500,
    referralBonusEarned: 45000,
    binaryBonusEarned: 85000,
    depositAmount: 8500, // 10% from binary
    cashbackAmount: 15000,
    nextStatusProgress: 65, // percentage to Директор
  },
  transactions: [
    { id: '1', date: '2023-10-25', type: 'Бинарный бонус', amount: 35000, status: 'Успешно', comment: 'Начисление за период' },
    { id: '2', date: '2023-10-25', type: 'Депозит (10%)', amount: -3500, status: 'Успешно', comment: 'Удержание с бинарного бонуса' },
    { id: '3', date: '2023-10-22', type: 'Реферальный бонус', amount: 18000, status: 'Успешно', comment: 'Приглашен: Нурлан Т.' },
    { id: '4', date: '2023-10-18', type: 'Вывод средств', amount: -50000, status: 'Успешно', comment: 'Вывод на Kaspi Gold' },
    { id: '5', date: '2023-10-15', type: 'Кэшбэк (20%)', amount: 4500, status: 'Успешно', comment: 'Покупка продукта' },
  ],
  team: {
    leftActive: 42,
    rightActive: 31,
    leftSpillover: 15,
    rightSpillover: 0,
  }
};
