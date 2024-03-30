const modulesTowers = [
  // {
  //   category: ["Здоровье"],
  //   title: "Лагерь «Чайка»",
  //   description:
  //     'Приобретение комплекса быстровозводимых модульных зданий для детского оздоровительного лагеря "Чайка" на 140 мест.',
  //   date: new Date("03-14-2023"),
  // },
  // {
  //   category: ["Здоровье"],
  //   title: "Здание женской консультации ",
  //   description:
  //     "Приобретение, установка и оснащение модульного здания женской консультации для МБУЗ ГБ №2, расположенного: г.Шахты, пер. Острикова, 5-а",
  //   date: new Date("03-28-2022"),
  // },
  { id: "1",
    category: ["Здоровье"],
    title: "Подстанция СМП",
    img: '/Images/modulTowers/Healthy/08_16_2021/cover.png',
    catalog: ['/Images/modulTowers/Healthy/08_16_2021/cover.png', '/Images/modulTowers/Healthy/08_16_2021/01.jpg', '/Images/modulTowers/Healthy/08_16_2021/02.jpg', '/Images/modulTowers/Healthy/08_16_2021/03.jpg', '/Images/modulTowers/Healthy/08_16_2021/04.jpg', '/Images/modulTowers/Healthy/08_16_2021/05.jpg',],
    description:
      'Модульный комплекс для размещения подстанции скорой медицинской помощи МБУЗ «Районная больница», Ростовская область, г.Красный Сулин, ул. Российская, 2',
    date: new Date("2021/08/16"),

    floors: '1',
    square: '568,1 м2',
    deadlines: '107 дней',
    location: 'Ростовская область, Красносулинский район, г. Красный Сулин, ул. Российская, 2',
  },
  {id: "2",
    category: ["Здоровье"],
    img: '/Images/modulTowers/Healthy/06_10_2020/cover.png',
    catalog: ['/Images/modulTowers/Healthy/06_10_2020/cover.png', '/Images/modulTowers/Healthy/06_10_2020/01.webp', '/Images/modulTowers/Healthy/06_10_2020/02.webp', '/Images/modulTowers/Healthy/06_10_2020/03.webp', '/Images/modulTowers/Healthy/06_10_2020/04.webp', '/Images/modulTowers/Healthy/06_10_2020/05.webp', '/Images/modulTowers/Healthy/06_10_2020/06.webp', '/Images/modulTowers/Healthy/06_10_2020/07.webp', ],
    title: "Регистратура и холл ожидания",
    description:
      "Поставка 2-х этажного модульного здания (для регистратуры и холла ожидания) для ГБУ РО «Онкологический диспансер» в г.Шахты на 2020 год.",
    date: new Date("2020/10/06"),

    floors: '2',
    square: '275,81 м2',
    deadlines: '56 дней',
    location: 'Ростовская область, г. Шахты, ул. Шевченко, 153',
  },
  {id: '8',
    category: ["Здоровье"],
    title: "Лабораторный комплекс",
    img: '/Images/modulTowers/Healthy/04_30_2020/cover.png',
    catalog: ['/Images/modulTowers/Healthy/04_30_2020/cover.png', '/Images/modulTowers/Healthy/04_30_2020/01.jpg', '/Images/modulTowers/Healthy/04_30_2020/02.jpg', '/Images/modulTowers/Healthy/04_30_2020/03.jpg', '/Images/modulTowers/Healthy/04_30_2020/04.jpg', '/Images/modulTowers/Healthy/04_30_2020/05.jpg', '/Images/modulTowers/Healthy/04_30_2020/06.jpg',],
    description:
      "«Комплекс дифференциальной диагностики онкологической патологии и других заболеваний человека с секционной группой» для нужд ГБУ РО «ПАБ».",
    date: new Date("2020/04/30"),
    floors: '2',
    square: '1702 м2',
    deadlines: '175 дней',
    location: 'Ростовская обл. г. Ростов-на-Дону, ул. Благодатная, д. 170а',
  },
  {id: "3",
    category: ["Здоровье"],
    title: "Инфекционное отделение",
    img: '/Images/modulTowers/Healthy/04_20_2020/cover.png',
    catalog: ['/Images/modulTowers/Healthy/04_20_2020/cover.png', '/Images/modulTowers/Healthy/04_20_2020/01.webp', '/Images/modulTowers/Healthy/04_20_2020/02.webp', '/Images/modulTowers/Healthy/04_20_2020/03.webp', '/Images/modulTowers/Healthy/04_20_2020/04.webp', '/Images/modulTowers/Healthy/04_20_2020/05.webp', '/Images/modulTowers/Healthy/04_20_2020/06.webp', '/Images/modulTowers/Healthy/04_20_2020/07.webp', ],
    description:
      "Приобретение модульного здания инфекционного отделения для МБУЗ ГБСМП им. В.И. Ленина.",
    date: new Date("2020/04/20"),

    floors: '1',
    square: '1291,35 м2',
    deadlines: '209 дней',
    location: 'Ростовская область, г. Шахты, ул.Шевченко, 153.',
  },{id: "10",
    category: ["Здоровье"],
    title: "Бактериологическая лаборатория",
    img: '/Images/modulTowers/Healthy/04_20_2020/labs/cover.webp',
    catalog: ['/Images/modulTowers/Healthy/04_20_2020/labs/cover.webp', '/Images/modulTowers/Healthy/04_20_2020/labs/01.webp', '/Images/modulTowers/Healthy/04_20_2020/labs/02.webp', '/Images/modulTowers/Healthy/04_20_2020/labs/03.webp', '/Images/modulTowers/Healthy/04_20_2020/labs/04.webp',],
    description:
        "Приобретение модульного здания бактериологической лаборатории для МБУЗ ГБСМП им. В.И. Ленина.",
    date: new Date("2020/04/20"),

    floors: '2',
    square: '1940,45 м2',
    deadlines: '209 дней',
    location: 'Ростовская область, г. Шахты, ул.Шевченко, 153.',
  },
  // {
  //   category: ["Здоровье"],
  //   title: "ЦАОП",
  //   description:
  //     "2-х этажное здание для размещения Центра амбулаторной онкологической помощи ГБУ РО «Онкологический диспансер» в г. Волгодонск",
  //   date: new Date("09-12-2019"),
  // },
  // {id: "8",
  //   category: ["Здоровье"],
  //   img: ,
  //   title: "Онкологический диспансер",
  //   description:
  //     "Здание клинико – диагностической лаборатории, кабинетов эндоскопии и приема врачей-онкологов ГБУ РО «Онкологический диспансер» в г. Шахты",
  //   date: new Date("09-12-2019"),
  // },
  {id: "4",
    category: ["Спорт"],
    img: '/Images/modulTowers/Sport/15_05_2019/cover.png',
    catalog:['/Images/modulTowers/Sport/15_05_2019/cover.png', '/Images/modulTowers/Sport/15_05_2019/01.webp', '/Images/modulTowers/Sport/15_05_2019/02.webp', '/Images/modulTowers/Sport/15_05_2019/03.webp', '/Images/modulTowers/Sport/15_05_2019/04.webp', '/Images/modulTowers/Sport/15_05_2019/05.webp', '/Images/modulTowers/Sport/15_05_2019/06.webp', '/Images/modulTowers/Sport/15_05_2019/07.webp', '/Images/modulTowers/Sport/15_05_2019/08.webp'],
    title: "Спортивный зал",
    description:
      "Модульный спортивный зал для Верхнесоленовской МБОУ СОШ, расположенной по адресу: Ростовская область, Веселовский район, х.Нижнесоленый, ул.Казима Мустафаева, 1",
    date: new Date("2019/05/15"),
    floors: '1',
    square: '852,9 м2',
    deadlines: '78 дней',
    location: 'Ростовская область Веселовский район х. Нижнесоленый ул. Казима Мустафаева, 1',
  },
  // {
  //   category: ["Спорт"],
  //   title: "Cпортивный зал",
  //   description:
  //     "Модульный спортивный зал для осуществления тренировочной и соревновательной деятельности МБУ ФК и спорта «Жирновский спортклуб»",
  //   date: new Date("05-15-2019"),
  // },
  {id: "5",
    category: ["Культура"],
    img: "/Images/modulTowers/Culture/26_12_2022/cover.png",
    catalog: ["/Images/modulTowers/Culture/26_12_2022/cover.png", "/Images/modulTowers/Culture/26_12_2022/26.12.2022_Culture(2).png"],
    title: "Дом Культуры",
    date: new Date("2022/12/26"),
    description:
      "Приобретение и установка модульного Дома Культуры расположенного по адресу: Ростовская область, Верхнедонской район, х.Песковатская Лопатина, ул. Песковатско-Лопатинская, 184",

    floors: '1',
    square: '493,5 м2',
    deadlines: '308 дней',
    location: 'Ростовская область, Верхнедонской район, хутор Песковатская-Лопатина, ул. Песковатско-Лопатинская, 184',
  },
  {id: "6",
    category: ["Образование", "Крым", "Новые территории"],
    img: '/Images/modulTowers/Education/22_10_2021/cover.png',
    catalog: ['/Images/modulTowers/Education/22_10_2021/cover.png', '/Images/modulTowers/Education/22_10_2021/01.webp', '/Images/modulTowers/Education/22_10_2021/02.jpg', '/Images/modulTowers/Education/22_10_2021/03.webp', ],
    description:
      "Модульный детский сад на 100 мест к МБОУ «Плодовская СОШ»",
    title: "Плодовская СОШ",
    date: new Date("2021/10/22"),

    floors: '2',
    square: '1162,1 м2',
    deadlines: '221 день',
    location: 'р.Крым, Бахчисарайский район, с.Плодовое, ул.Ленина, 71',
  },
  {id: "7",
    category: ["Образование", "Крым", "Новые территории"],
    title: "Красномакская СОШ",
    img: "/Images/modulTowers/Education/10_02_2023/cover.png",
    catalog: ["/Images/modulTowers/Education/10_02_2023/cover.png", '/Images/modulTowers/Education/10_02_2023/01.webp', '/Images/modulTowers/Education/10_02_2023/02.webp', '/Images/modulTowers/Education/10_02_2023/03.webp', '/Images/modulTowers/Education/10_02_2023/04.webp', '/Images/modulTowers/Education/10_02_2023/05.webp', '/Images/modulTowers/Education/10_02_2023/06.webp', '/Images/modulTowers/Education/10_02_2023/07.webp', '/Images/modulTowers/Education/10_02_2023/08.webp', ],
    description:
      "Модульный детский сад на 100 мест к МБОУ «Красномакская СОШ»",
    date: new Date("2023/02/10"),

    floors: '2',
    square: '1144,5 м2',
    deadlines: '172 дня',
    location: 'р.Крым, Бахчисарайский район, с.Красный Мак, ул. Ленина,38',
  },
  {
    id: '9',
    category: ["Образование", "Крым", "Новые территории"],
    img: '/Images/modulTowers/Education/11_08_2022/cover.webp',
    catalog: ['/Images/modulTowers/Education/11_08_2022/cover.webp', '/Images/modulTowers/Education/11_08_2022/01.webp', '/Images/modulTowers/Education/11_08_2022/02.webp', '/Images/modulTowers/Education/11_08_2022/03.webp', '/Images/modulTowers/Education/11_08_2022/04.webp', '/Images/modulTowers/Education/11_08_2022/05.webp'],
    title: "Завет-Ленинская школа-детский сад",
    description:
        "Приобретение (поставка и монтаж) модульного детского сада к МБОУ «Завет-Ленинская школа-детский сад» Джанкойского района Республики Крым",
    date: new Date("2021/11/08"),
    floors: "2",
    square: '1162,5 м2',
    deadlines: '205 дней',
    location: 'Республика Крым, Джанкойский район, село Завет-Ленинский, улица Шевченко, дом 42.',
  },
  // {
  //   category: ["Образование"],
  //   title: "Детский сад «Орленок»",
  //   description:
  //     "Приобретение модульного детского сада к МБДОУ «Детский сад «Орленок» с. Чистенькое» Симферопольского района Республики Крым",
  //   date: new Date("03-15-2019"),
  // },
  // {
  //   category: ["Образование"],
  //   title: "Детский сад к «Школьной академии»",
  //   description:
  //     "Модульный детский сад к МБОУ Учебно-воспитательный комплекс «Школьная академия» Бахчисарайский район, г. Бахчисарай, ул. Мира.",
  //   date: new Date("06-05-2018"),
  // },
  // {
  //   category: ["Образование"],
  //   title: "Детский Сад №17",
  //   description:
  //     "Поставка модульного детского сада (Детский Сад №17 Муниципального Образования «Город Донецк»)",
  //   date: new Date("08-10-2015"),
  // },
  // {
  //   category: ["Образование"],
  //   title: "МБДОУ Д/С №93",
  //   description:
  //     "Приобретение модульного детского сада на 100 мест (МБДОУ Д/С №93)",
  //   date: new Date("04-08-2015"),
  // },
  // {
  //   category: ["Образование"],
  //   title: "МБДОУ Д/С №102",
  //   description:
  //     "Приобретение модульного детского сада на 50 мест (МБДОУ Д/С №102)",
  //   date: new Date("07-22-2015"),
  // },
  // {
  //   category: ["Образование"],
  //   title: "МБОУ Д/С №36",
  //   description:
  //     "Приобретение модульного детского сада на 100 мест (МБДОУ Д/С №36)",
  //   date: new Date("07-20-2015"),
  // },
  // {
  //   category: ["Образование"],
  //   title: "МБДОУ Д/С 71",
  //   description:
  //     "Приобретение модульного детского сада на 50 мест (МБДОУ Д/С №71)",
  //   date: new Date("05-28-2015"),
  // },
  // {
  //   category: ["Образование"],
  //   title: "МБДОУ Д/С №51",
  //   description:
  //     "Приобретение модульного детского сада на 50 мест (МБДОУ Д/С №51)",
  //   date: new Date("05-28-2015"),
  // },
  // {
  //   category: ["Образование"],
  //   title: "МБДОУ Д/С «Здоровый ребенок»",
  //   description:
  //     "Приобретение модульного детского сада на 50 мест (МБДОУ Д/С «Здоровый ребенок»)",
  //   date: new Date("05-28-2015"),
  // },
  // {
  //   category: ["Образование"],
  //   title: "МБДОУ д/с №43",
  //   description:
  //     "Приобретение модульного детского сада на 50 мест (МБДОУ д/с №43)",
  //   date: new Date("05-20-2015"),
  // },
  // {
  //   category: ["Образование"],
  //   title: "МБДОУ Д/С №101",
  //   description:
  //     "Приобретение модульного детского сада на 50 мест (МБДОУ Д/С №101)",
  //   date: new Date("05-20-2015"),
  // },
  // {
  //   category: ["Образование"],
  //   title: "МБОУ Д/С № 299",
  //   description:
  //     "Модульный д/с с производственно-хозяйственным и инженерным оборудованием для МБОУ Д/С второй категории № 299 г. Ростова-на-Дону.",
  //   date: new Date("30-10-2014"),
  // },
  // {
  //   category: ["Образование"],
  //   title: "МБДОУ д/с № 99",
  //   description:
  //     "Поставка модульного детского сада на 75 мест для МБДОУ д/с № 99",
  //   date: new Date("09-03-2014"),
  // },
  // {
  //   category: ["Образование"],
  //   title: "МБДОУ д/с № 39",
  //   description:
  //     "Поставка модульного детского сада на 100 мест для МБДОУ д/с № 39",
  //   date: new Date("09-03-2014"),
  // },
  // {
  //   category: ["Образование"],
  //   title: "Детский сад первой категории № 41",
  //   description:
  //     "Поставка модульного детского сада на 100 мест для МБДОУ «Центр развития ребенка - детский сад первой категории № 41»",
  //   date: new Date("09-03-2014"),
  // },
];
export default modulesTowers;
