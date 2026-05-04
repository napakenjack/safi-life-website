export interface Package {
  id: string;
  name: string;
  price: number;
  referralBonus: number;
  binaryBonus: number | null;
  features: string[];
  isPopular?: boolean;
}

export const packages: Package[] = [
  {
    id: 'start',
    name: 'START',
    price: 30000,
    referralBonus: 5,
    binaryBonus: null,
    features: [
      'Доступ ко всем продуктам',
      'Личный кабинет',
      'Реферальная ссылка',
      'Обучающие материалы',
      'Кэшбэк 20%',
    ],
  },
  {
    id: 'business',
    name: 'BUSINESS',
    price: 60000,
    referralBonus: 10,
    binaryBonus: 7,
    features: [
      'Бинарный бонус 7%',
      'Доступ ко всем продуктам',
      'Личный кабинет',
      'Реферальная ссылка',
      'Обучающие материалы',
      'Кэшбэк 20%',
    ],
  },
  {
    id: 'vip',
    name: 'VIP',
    price: 180000,
    referralBonus: 10,
    binaryBonus: 8,
    isPopular: true,
    features: [
      'Бинарный бонус 8%',
      'Улучшенное обучение',
      'Доступ ко всем продуктам',
      'Личный кабинет',
      'Реферальная ссылка',
      'Кэшбэк 20%',
    ],
  },
  {
    id: 'elite',
    name: 'ELITE',
    price: 300000,
    referralBonus: 10,
    binaryBonus: 10,
    features: [
      'Статусный бонус',
      'Максимальный бинарный бонус 10%',
      'Bonus X2 доступен',
      'VIP обучение и поддержка',
      'Доступ ко всем продуктам',
      'Личный кабинет',
      'Обучающие материалы',
      'Кэшбэк 20%',
    ],
  }
];
