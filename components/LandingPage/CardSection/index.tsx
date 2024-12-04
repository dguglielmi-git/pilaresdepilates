import React from 'react';
import PriceCard from './PriceCard';
import { PriceCardProps } from '@/types/PriceCardProps';
import Styles from './CardSection.module.scss';
import Waves from '@/components/Waves';
import { useTranslation } from 'react-i18next';

const CardSection = () => {
  const { i18n } = useTranslation();

  const cards: PriceCardProps[] = [
    {
      name: i18n.t('pilaresFirstCardCardName'),
      title: i18n.t('pilaresFirstCardCardTitle'),
      content: i18n.t('pilaresFirstCardPrice'),
      imageUrl: '/pilates-one.jpg',
    },
    {
      name: i18n.t('pilaresSecondCardCardName'),
      title: i18n.t('pilaresSecondCardCardTitle'),
      content: i18n.t('pilaresSecondCardPrice'),
      imageUrl: '/pilates-two.jpg',
    },
    {
      name: i18n.t('pilaresThirdCardCardName'),
      title: i18n.t('pilaresThirdCardCardTitle'),
      content: i18n.t('pilaresThirdCardPrice'),
      imageUrl: '/pilates-three.jpg',
    },
  ];

  return (
    <section className={Styles['cardsection-container']}>
      <Waves />

      <section className={Styles['cardsection-container__title']}>
        <h1>Nuestros Planes</h1>
        <h4>
          Elige el plan que mejor se ajuste a tu estilo de vida y comienza a transformar tu bienestar con nuestro
          estudio de Pilates.
        </h4>
      </section>
      <div className={Styles['cardsection-container__cards']}>
        {cards.map((card, index) => (
          <PriceCard name={card.name} key={index} title={card.title} content={card.content} imageUrl={card.imageUrl} />
        ))}
        <article className={Styles['cardsection-container__waves']}>
          <Waves backgroundColor='#e5e5e5' />
        </article>
      </div>
    </section>
  );
};

export default CardSection;
