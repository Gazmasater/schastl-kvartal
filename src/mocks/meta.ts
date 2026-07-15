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
