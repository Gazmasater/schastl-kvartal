import { TMeta } from '@localTypes/meta'

type TMetas = {
  [k: string]: TMeta
}

export const Metas: TMetas = {
  homepage: {
    title: 'Купить дом в Липецке и Липецком районе — «Счастливый Квартал»',
    description:
      'Готовые дома с участком от 8,5 млн ₽ в коттеджном посёлке «Счастливый Квартал»: с. Ленино, Липецкий район, 6 км от Липецка.',
  },
  housesInLipetskDistrict: {
    title: 'Купить дом в Липецком районе — КП «Счастливый Квартал»',
    description:
      'Готовые дома с участками от 8,5 млн ₽ в коттеджном посёлке «Счастливый Квартал» в селе Ленино Липецкого района, в 6 км от Липецка.',
    structuredData: [
      {
        '@type': 'ItemList',
        name: 'Дома в коттеджном посёлке «Счастливый Квартал»',
        numberOfItems: 4,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'SingleFamilyResidence',
              name: 'Дом «Сканди» 155 м²',
              url: 'https://kvartal-lipetsk.ru/doma-v-lipetskom-rayone/dom-skandi-155-m2',
              floorSize: { '@type': 'QuantitativeValue', value: 155, unitCode: 'MTK' },
              additionalProperty: { '@type': 'PropertyValue', name: 'Статус', value: 'Продан' },
              offers: { '@type': 'Offer', availability: 'https://schema.org/SoldOut', priceCurrency: 'RUB' },
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'SingleFamilyResidence',
              name: 'Барнхаус 115 м²',
              url: 'https://kvartal-lipetsk.ru/doma-v-lipetskom-rayone/barnhaus-115-m2',
              floorSize: { '@type': 'QuantitativeValue', value: 115, unitCode: 'MTK' },
              additionalProperty: { '@type': 'PropertyValue', name: 'Статус', value: 'Готов к продаже' },
              offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'RUB' },
            },
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@type': 'SingleFamilyResidence',
              name: 'Дом «Модерн-140» 140 м²',
              url: 'https://kvartal-lipetsk.ru/doma-v-lipetskom-rayone/dom-modern-140-m2',
              floorSize: { '@type': 'QuantitativeValue', value: 140, unitCode: 'MTK' },
              additionalProperty: { '@type': 'PropertyValue', name: 'Статус', value: 'Готов к продаже' },
              offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'RUB' },
            },
          },
          {
            '@type': 'ListItem',
            position: 4,
            item: {
              '@type': 'SingleFamilyResidence',
              name: 'Дом «Модерн-100» 97 м²',
              url: 'https://kvartal-lipetsk.ru/doma-v-lipetskom-rayone/dom-modern-100-m2',
              floorSize: { '@type': 'QuantitativeValue', value: 97, unitCode: 'MTK' },
              additionalProperty: { '@type': 'PropertyValue', name: 'Статус', value: 'Готов к продаже' },
              offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'RUB' },
            },
          },
        ],
      },
      {
        '@type': 'Product',
        name: 'Готовые дома с участками в «Счастливом Квартале»',
        description: 'Готовые дома с участками в селе Ленино Липецкого района, в 6 км от Липецка.',
        offers: {
          '@type': 'AggregateOffer',
          lowPrice: 8500000,
          priceCurrency: 'RUB',
          offerCount: 3,
          availability: 'https://schema.org/InStock',
          url: 'https://kvartal-lipetsk.ru/doma-v-lipetskom-rayone',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Где находится коттеджный посёлок «Счастливый Квартал»?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Посёлок расположен в селе Ленино Липецкого района, в 6 км от Липецка по Воронежскому направлению.',
            },
          },
          {
            '@type': 'Question',
            name: 'Какие коммуникации и инфраструктура предусмотрены в посёлке?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Дома подключены к коммуникациям. На территории посёлка предусмотрены единый стиль застройки и освещение улиц.',
            },
          },
          {
            '@type': 'Question',
            name: 'Можно ли купить дом в ипотеку?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Возможность покупки дома в ипотеку и актуальные условия уточняйте у менеджера перед оформлением сделки.',
            },
          },
          {
            '@type': 'Question',
            name: 'Как записаться на просмотр дома?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Оставьте заявку на сайте или позвоните по телефону, чтобы согласовать удобное время просмотра.',
            },
          },
          {
            '@type': 'Question',
            name: 'Где провести зимние выходные рядом с Ленино?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'В селе Пады база отдыха «Алые Паруса» заявляет зимние активности: тюбинг, коньки и лыжи. Перед поездкой уточните режим работы и наличие снега.',
            },
          },
          {
            '@type': 'Question',
            name: 'Есть ли рядом занятия верховой ездой?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'В Ленино работает конный клуб «Жокей». По открытым данным, здесь проводят занятия верховой ездой, конные прогулки и фотосессии. Перед визитом уточните расписание и условия записи.',
            },
          },
          {
            '@type': 'Question',
            name: 'Какая инфраструктура есть в Romanovo City?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'В Romanovo City работают спорт и SPA с бассейном, баней, сауной и хаммамом, теннис, ресторан, продуктовый рынок и сервисы доставки.',
            },
          },
          {
            '@type': 'Question',
            name: 'Что предусмотрено для семей с дошкольниками?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'В Romanovo City заявлен образовательный кластер с детским садом и начальной школой; площадка под него выбрана. В спортивном комплексе есть детская игровая зона. Сроки реализации образовательного проекта уточняйте у застройщика.',
            },
          },
        ],
      },
    ],
  },
  nearbyParkovyeKvartaly: {
    title: 'Дома с участком рядом с «Парковыми Кварталами» — Счастливый Квартал',
    description:
      'Рассматриваете «Парковые Кварталы»? Посмотрите готовые дома с участками в коттеджном посёлке «Счастливый Квартал» рядом с Липецком.',
    structuredData: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Какие дома можно посмотреть рядом с «Парковыми Кварталами»?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'В «Счастливом Квартале» доступны проекты домов с участками в Липецком районе. На странице каждого проекта указаны планировка и площадь дома.',
          },
        },
        {
          '@type': 'Question',
          name: 'Как записаться на просмотр дома?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Оставьте заявку на сайте или свяжитесь с нами по телефону, чтобы согласовать удобное время просмотра.',
          },
        },
      ],
    },
  },
  contacts: {
    title: 'Контакты для покупки дома в Липецком районе',
    description:
      'Контакты коттеджного посёлка «Счастливый Квартал» в селе Ленино Липецкого района. Запишитесь на просмотр дома.',
  },
  gallery: {
    title: 'Галерея домов в Липецком районе — «Счастливый Квартал»',
    description:
      'Фотографии строительства и готовых домов с участками в коттеджном посёлке «Счастливый Квартал» в Липецком районе.',
  },
  house1: {
    title: 'Дом «Сканди» 155 м² — купить в Липецком районе',
    description:
      'Дом «Сканди» 155 м² с участком в коттеджном посёлке «Счастливый Квартал», с. Ленино Липецкого района: планировка и просмотр.',
    image: '/img/mainPageBanner/house-1-155m2/mainPageBanner-lg.webp',
    structuredData: {
      '@type': 'SingleFamilyResidence',
      name: 'Дом «Сканди» 155 м²',
      description: 'Дом «Сканди» площадью 155 м² с участком в коттеджном посёлке «Счастливый Квартал».',
      url: 'https://kvartal-lipetsk.ru/doma-v-lipetskom-rayone/dom-skandi-155-m2',
      image: 'https://kvartal-lipetsk.ru/img/mainPageBanner/house-1-155m2/mainPageBanner-lg.webp',
      floorSize: { '@type': 'QuantitativeValue', value: 155, unitCode: 'MTK' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'с. Ленино',
        addressRegion: 'Липецкая область',
        addressCountry: 'RU',
      },
    },
  },
  house2: {
    title: 'Барнхаус 115 м² — купить дом в Липецком районе',
    description:
      'Барнхаус 115 м² с участком в коттеджном посёлке «Счастливый Квартал», с. Ленино Липецкого района: планировка и просмотр.',
    image: '/img/mainPageBanner/house-2-115m2/mainPageBanner-lg.webp',
    structuredData: {
      '@type': 'SingleFamilyResidence',
      name: 'Дом «Барнхаус» 115 м²',
      description: 'Дом «Барнхаус» площадью 115 м² с участком в коттеджном посёлке «Счастливый Квартал».',
      url: 'https://kvartal-lipetsk.ru/doma-v-lipetskom-rayone/barnhaus-115-m2',
      image: 'https://kvartal-lipetsk.ru/img/mainPageBanner/house-2-115m2/mainPageBanner-lg.webp',
      floorSize: { '@type': 'QuantitativeValue', value: 115, unitCode: 'MTK' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'с. Ленино',
        addressRegion: 'Липецкая область',
        addressCountry: 'RU',
      },
    },
  },
  house3: {
    title: 'Дом «Модерн-140» 140 м² — купить в Липецком районе',
    description:
      'Дом «Модерн-140» 140 м² с участком в коттеджном посёлке «Счастливый Квартал», с. Ленино Липецкого района: планировка и просмотр.',
    image: '/img/mainPageBanner/house-3-140m2/mainPageBanner-lg.webp',
    structuredData: {
      '@type': 'SingleFamilyResidence',
      name: 'Дом «Модерн-140» 140 м²',
      description: 'Дом «Модерн-140» площадью 140 м² с участком в коттеджном посёлке «Счастливый Квартал».',
      url: 'https://kvartal-lipetsk.ru/doma-v-lipetskom-rayone/dom-modern-140-m2',
      image: 'https://kvartal-lipetsk.ru/img/mainPageBanner/house-3-140m2/mainPageBanner-lg.webp',
      floorSize: { '@type': 'QuantitativeValue', value: 140, unitCode: 'MTK' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'с. Ленино',
        addressRegion: 'Липецкая область',
        addressCountry: 'RU',
      },
    },
  },
  house4: {
    title: 'Дом «Модерн-100» 97 м² — купить в Липецком районе',
    description:
      'Дом «Модерн-100» 97 м² с участком в коттеджном посёлке «Счастливый Квартал», с. Ленино Липецкого района: планировка и просмотр.',
    image: '/img/mainPageBanner/house-4-97m2/mainPageBanner-lg.webp',
    structuredData: {
      '@type': 'SingleFamilyResidence',
      name: 'Дом «Модерн-100» 97 м²',
      description: 'Дом «Модерн-100» площадью 97 м² с участком в коттеджном посёлке «Счастливый Квартал».',
      url: 'https://kvartal-lipetsk.ru/doma-v-lipetskom-rayone/dom-modern-100-m2',
      image: 'https://kvartal-lipetsk.ru/img/mainPageBanner/house-4-97m2/mainPageBanner-lg.webp',
      floorSize: { '@type': 'QuantitativeValue', value: 97, unitCode: 'MTK' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'с. Ленино',
        addressRegion: 'Липецкая область',
        addressCountry: 'RU',
      },
    },
  },
}
