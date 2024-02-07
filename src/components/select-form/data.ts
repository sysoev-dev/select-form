const COUNTRIES_CODE_NAME = {
  RU: 'Russia',
  BY: 'Belarus',
  Russia: 'RU',
  Belarus: 'BY',
};

const countries = [
  {
    name: 'РФ',
    value: 'Russia',
  },
  {
    name: 'РБ',
    value: 'Belarus',
  },
];

const cities = [
  {
    country: 'RU',
    name: 'Москва',
    value: 'Moscow',
  },
  {
    country: 'RU',
    name: 'Сочи',
    value: 'Sochi',
  },
  {
    country: 'BY',
    name: 'Минск',
    value: 'Minsk',
  },
  {
    country: 'BY',
    name: 'Гомель',
    value: 'Gomel',
  },
];

const UNIVERSITIES_TYPES = {
  TECHNICAL: 'Technical',
  HUMANITARIAN: 'Humanitarian',
};

const universities = [
  {
    name: 'Технический',
    value: 'Technical',
  },
  {
    name: 'Гуманитарный',
    value: 'Humanitarian',
  },
];

const accommodationList = [
  {
    country: 'BY',
    name: 'Общежития',
    value: 'Dorms',
  },
  {
    name: 'Аренда',
    value: 'Rent',
  },
  {
    country: 'BY',
    name: 'Не интересует',
    value: 'Not-interested',
  },
  {
    name: 'Общежития + Аренда',
    value: 'Dorms-and-Rent',
  },
];

const faculties = {
  technical: [
    {
      name: 'Математика',
      value: 'Mathematics',
    },
    {
      name: 'Физика',
      value: 'Physics',
    },
  ],
  humanitarian: [
    {
      name: 'История',
      value: 'History',
    },
    {
      name: 'Философия',
      value: 'Philosophy',
    },
  ],
};

const citiesListRu = cities.filter(
  (item) => item.country === COUNTRIES_CODE_NAME.Russia
);

const citiesListBy = cities.filter(
  (item) => item.country === COUNTRIES_CODE_NAME.Belarus
);

const accommodationListBy = accommodationList.filter(
  (item) => item.country === COUNTRIES_CODE_NAME.Belarus
);

export {
  countries,
  universities,
  UNIVERSITIES_TYPES,
  COUNTRIES_CODE_NAME,
  citiesListRu,
  citiesListBy,
  accommodationList,
  accommodationListBy,
  faculties,
};
